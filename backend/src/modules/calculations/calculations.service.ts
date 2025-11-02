import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions, Like, Between } from 'typeorm';
import { Calculation } from './entities/calculation.entity';
import { CreateCalculationDto } from './dto/create-calculation.dto';
import { PricingService, PricingInput } from './services/pricing.service';
import { ExchangeService } from '../exchange/exchange.service';
import { PresetsService } from '../presets/presets.service';
import { AuthService } from '../auth/auth.service';

export interface CalculationFilters {
  page: number;
  limit: number;
  search?: string;
  category?: string;
  favorite?: boolean;
}

@Injectable()
export class CalculationsService {
  private readonly logger = new Logger(CalculationsService.name);

  constructor(
    @InjectRepository(Calculation)
    private readonly calculationRepository: Repository<Calculation>,
    private readonly pricingService: PricingService,
    private readonly exchangeService: ExchangeService,
    private readonly presetsService: PresetsService,
    private readonly authService: AuthService,
  ) {}

  /**
   * Criar novo cálculo de precificação
   */
  async create(userId: string, dto: CreateCalculationDto) {
    // Verificar se usuário pode criar cálculos
    const canCreate = await this.authService.canCreateCalculation(userId);
    if (!canCreate) {
      throw new ForbiddenException(
        'Limite de cálculos atingido para seu plano. Faça upgrade para continuar.',
      );
    }

    // Preparar dados para cálculo
    const pricingInput = await this.preparePricingInput(dto);

    // Validar entrada
    const validation = this.pricingService.validateInput(pricingInput);
    if (!validation.isValid) {
      throw new BadRequestException(`Dados inválidos: ${validation.errors.join(', ')}`);
    }

    // Realizar cálculo
    const result = this.pricingService.calculatePricing(pricingInput);

    // Salvar no banco
    const calculation = this.calculationRepository.create({
      userId,
      productName: dto.productName,
      supplierPrice: dto.supplierPrice,
      supplierCurrency: dto.supplierCurrency,
      sellCurrency: dto.sellCurrency,
      exchangeRate: result.exchangeRate,
      freight: dto.freight || 0,
      fixedCostPerUnit: dto.fixedCostPerUnit || 0,
      marginPercent: dto.marginPercent || 30,
      markupPercent: dto.markupPercent || 0,
      adsCostPercent: dto.adsCostPercent || 0,
      adsCostFixed: dto.adsCostFixed || 0,
      finalPrice: result.recommendedPrice,
      resultBreakdown: result,
      notes: dto.notes,
      tags: dto.tags || [],
      weight: dto.weight,
      dimensions: dto.dimensions,
      category: dto.category,
      platformId: dto.platformId,
      gatewayId: dto.gatewayId,
    });

    const savedCalculation = await this.calculationRepository.save(calculation);

    // Incrementar contador do usuário
    await this.authService.incrementCalculationCount(userId);

    this.logger.log(`Cálculo criado: ${savedCalculation.id} para usuário ${userId}`);

    return {
      calculation: savedCalculation,
      result,
      message: 'Cálculo realizado com sucesso',
    };
  }

  /**
   * Cálculo rápido sem salvar
   */
  async quickCalculation(userId: string, dto: CreateCalculationDto) {
    // Preparar dados para cálculo
    const pricingInput = await this.preparePricingInput(dto);

    // Validar entrada
    const validation = this.pricingService.validateInput(pricingInput);
    if (!validation.isValid) {
      throw new BadRequestException(`Dados inválidos: ${validation.errors.join(', ')}`);
    }

    // Realizar cálculo
    const result = this.pricingService.calculatePricing(pricingInput);

    return {
      result,
      message: 'Cálculo rápido realizado',
      note: 'Este cálculo não foi salvo',
    };
  }

  /**
   * Listar cálculos do usuário
   */
  async findAll(userId: string, filters: CalculationFilters) {
    const { page, limit, search, category, favorite } = filters;
    const skip = (page - 1) * limit;

    const where: any = { userId, isArchived: false };

    if (search) {
      where.productName = Like(`%${search}%`);
    }

    if (category) {
      where.category = category;
    }

    if (favorite) {
      where.isFavorite = true;
    }

    const options: FindManyOptions<Calculation> = {
      where,
      take: limit,
      skip,
      order: { createdAt: 'DESC' },
      relations: ['platform', 'gateway'],
    };

    const [calculations, total] = await this.calculationRepository.findAndCount(options);

    return {
      calculations,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Obter cálculo específico
   */
  async findOne(userId: string, id: string) {
    const calculation = await this.calculationRepository.findOne({
      where: { id, userId },
      relations: ['platform', 'gateway'],
    });

    if (!calculation) {
      throw new NotFoundException('Cálculo não encontrado');
    }

    return {
      calculation,
      message: 'Cálculo carregado com sucesso',
    };
  }

  /**
   * Simular diferentes cenários
   */
  async simulate(userId: string, id: string) {
    const calculation = await this.findOne(userId, id);
    const calc = calculation.calculation;

    // Preparar input baseado no cálculo existente
    const pricingInput: PricingInput = {
      productName: calc.productName,
      supplierPrice: calc.supplierPrice,
      supplierCurrency: calc.supplierCurrency,
      sellCurrency: calc.sellCurrency,
      exchangeRate: calc.exchangeRate,
      freight: calc.freight,
      fixedCostPerUnit: calc.fixedCostPerUnit,
      platformFeePercent: calc.resultBreakdown.platformFeePercent,
      gatewayFeePercent: calc.resultBreakdown.gatewayFeePercent,
      gatewayFixedFee: calc.resultBreakdown.gatewayFixedFee,
      taxPercent: calc.resultBreakdown.taxPercent,
      marginPercent: calc.marginPercent,
      markupPercent: calc.markupPercent,
      adsCostPercent: calc.adsCostPercent,
      adsCostFixed: calc.adsCostFixed,
    };

    const scenarios = this.pricingService.simulateScenarios(pricingInput);

    return {
      scenarios,
      message: 'Simulações geradas com sucesso',
    };
  }

  /**
   * Marcar/desmarcar como favorito
   */
  async toggleFavorite(userId: string, id: string) {
    const calculation = await this.calculationRepository.findOne({
      where: { id, userId },
    });

    if (!calculation) {
      throw new NotFoundException('Cálculo não encontrado');
    }

    calculation.isFavorite = !calculation.isFavorite;
    await this.calculationRepository.save(calculation);

    return {
      isFavorite: calculation.isFavorite,
      message: calculation.isFavorite ? 'Adicionado aos favoritos' : 'Removido dos favoritos',
    };
  }

  /**
   * Arquivar/desarquivar cálculo
   */
  async toggleArchive(userId: string, id: string) {
    const calculation = await this.calculationRepository.findOne({
      where: { id, userId },
    });

    if (!calculation) {
      throw new NotFoundException('Cálculo não encontrado');
    }

    calculation.isArchived = !calculation.isArchived;
    await this.calculationRepository.save(calculation);

    return {
      isArchived: calculation.isArchived,
      message: calculation.isArchived ? 'Cálculo arquivado' : 'Cálculo desarquivado',
    };
  }

  /**
   * Estatísticas dos cálculos do usuário
   */
  async getStats(userId: string) {
    const stats = await this.calculationRepository
      .createQueryBuilder('calc')
      .select([
        'COUNT(*) as total',
        'COUNT(CASE WHEN calc.isFavorite = true THEN 1 END) as favorites',
        'COUNT(CASE WHEN calc.isArchived = true THEN 1 END) as archived',
        'AVG(calc.finalPrice) as avgPrice',
        'AVG((calc.resultBreakdown->>\'profitMargin\')::float) as avgMargin',
        'COUNT(DISTINCT calc.category) as categories',
      ])
      .where('calc.userId = :userId', { userId })
      .getRawOne();

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const recentCalculations = await this.calculationRepository.count({
      where: {
        userId,
        createdAt: Between(today, tomorrow),
      },
    });

    return {
      stats: {
        ...stats,
        total: parseInt(stats.total),
        favorites: parseInt(stats.favorites),
        archived: parseInt(stats.archived),
        categories: parseInt(stats.categories),
        avgPrice: parseFloat(stats.avgPrice) || 0,
        avgMargin: parseFloat(stats.avgMargin) || 0,
        recentCalculations,
      },
      message: 'Estatísticas carregadas',
    };
  }

  /**
   * Preparar dados para cálculo de precificação
   */
  private async preparePricingInput(dto: CreateCalculationDto): Promise<PricingInput> {
    // Obter taxa de câmbio
    const exchangeRate = await this.exchangeService.getExchangeRate(
      dto.supplierCurrency,
      dto.sellCurrency,
    );

    // Obter configurações de taxas dos presets
    let platformFeePercent = dto.customPlatformFee || 0;
    let gatewayFeePercent = dto.customGatewayFee || 0;
    let gatewayFixedFee = dto.customGatewayFixedFee || 0;
    let taxPercent = dto.customTaxPercent || 0;

    // Se não há taxas customizadas, usar presets
    if (dto.platformId && !dto.customPlatformFee) {
      const platform = await this.presetsService.findPlatformById(dto.platformId);
      if (platform) {
        platformFeePercent = platform.feePercent;
      }
    }

    if (dto.gatewayId && !dto.customGatewayFee) {
      const gateway = await this.presetsService.findGatewayById(dto.gatewayId);
      if (gateway) {
        gatewayFeePercent = gateway.feePercent;
        gatewayFixedFee = gateway.fixedFee;
      }
    }

    return {
      productName: dto.productName,
      supplierPrice: dto.supplierPrice,
      supplierCurrency: dto.supplierCurrency,
      sellCurrency: dto.sellCurrency,
      exchangeRate,
      freight: dto.freight || 0,
      fixedCostPerUnit: dto.fixedCostPerUnit || 0,
      platformFeePercent,
      gatewayFeePercent,
      gatewayFixedFee,
      taxPercent,
      marginPercent: dto.marginPercent || 30,
      markupPercent: dto.markupPercent || 0,
      adsCostPercent: dto.adsCostPercent || 0,
      adsCostFixed: dto.adsCostFixed || 0,
    };
  }
}