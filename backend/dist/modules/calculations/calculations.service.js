"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CalculationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const calculation_entity_1 = require("./entities/calculation.entity");
const pricing_service_1 = require("./services/pricing.service");
const exchange_service_1 = require("../exchange/exchange.service");
const presets_service_1 = require("../presets/presets.service");
const auth_service_1 = require("../auth/auth.service");
let CalculationsService = CalculationsService_1 = class CalculationsService {
    constructor(calculationRepository, pricingService, exchangeService, presetsService, authService) {
        this.calculationRepository = calculationRepository;
        this.pricingService = pricingService;
        this.exchangeService = exchangeService;
        this.presetsService = presetsService;
        this.authService = authService;
        this.logger = new common_1.Logger(CalculationsService_1.name);
    }
    async create(userId, dto) {
        const canCreate = await this.authService.canCreateCalculation(userId);
        if (!canCreate) {
            throw new common_1.ForbiddenException('Limite de cálculos atingido para seu plano. Faça upgrade para continuar.');
        }
        const pricingInput = await this.preparePricingInput(dto);
        const validation = this.pricingService.validateInput(pricingInput);
        if (!validation.isValid) {
            throw new common_1.BadRequestException(`Dados inválidos: ${validation.errors.join(', ')}`);
        }
        const result = this.pricingService.calculatePricing(pricingInput);
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
        await this.authService.incrementCalculationCount(userId);
        this.logger.log(`Cálculo criado: ${savedCalculation.id} para usuário ${userId}`);
        return {
            calculation: savedCalculation,
            result,
            message: 'Cálculo realizado com sucesso',
        };
    }
    async quickCalculation(userId, dto) {
        const pricingInput = await this.preparePricingInput(dto);
        const validation = this.pricingService.validateInput(pricingInput);
        if (!validation.isValid) {
            throw new common_1.BadRequestException(`Dados inválidos: ${validation.errors.join(', ')}`);
        }
        const result = this.pricingService.calculatePricing(pricingInput);
        return {
            result,
            message: 'Cálculo rápido realizado',
            note: 'Este cálculo não foi salvo',
        };
    }
    async findAll(userId, filters) {
        const { page, limit, search, category, favorite } = filters;
        const skip = (page - 1) * limit;
        const where = { userId, isArchived: false };
        if (search) {
            where.productName = (0, typeorm_2.Like)(`%${search}%`);
        }
        if (category) {
            where.category = category;
        }
        if (favorite) {
            where.isFavorite = true;
        }
        const options = {
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
    async findOne(userId, id) {
        const calculation = await this.calculationRepository.findOne({
            where: { id, userId },
            relations: ['platform', 'gateway'],
        });
        if (!calculation) {
            throw new common_1.NotFoundException('Cálculo não encontrado');
        }
        return {
            calculation,
            message: 'Cálculo carregado com sucesso',
        };
    }
    async simulate(userId, id) {
        const calculation = await this.findOne(userId, id);
        const calc = calculation.calculation;
        const pricingInput = {
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
    async toggleFavorite(userId, id) {
        const calculation = await this.calculationRepository.findOne({
            where: { id, userId },
        });
        if (!calculation) {
            throw new common_1.NotFoundException('Cálculo não encontrado');
        }
        calculation.isFavorite = !calculation.isFavorite;
        await this.calculationRepository.save(calculation);
        return {
            isFavorite: calculation.isFavorite,
            message: calculation.isFavorite ? 'Adicionado aos favoritos' : 'Removido dos favoritos',
        };
    }
    async toggleArchive(userId, id) {
        const calculation = await this.calculationRepository.findOne({
            where: { id, userId },
        });
        if (!calculation) {
            throw new common_1.NotFoundException('Cálculo não encontrado');
        }
        calculation.isArchived = !calculation.isArchived;
        await this.calculationRepository.save(calculation);
        return {
            isArchived: calculation.isArchived,
            message: calculation.isArchived ? 'Cálculo arquivado' : 'Cálculo desarquivado',
        };
    }
    async getStats(userId) {
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
                createdAt: (0, typeorm_2.Between)(today, tomorrow),
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
    async preparePricingInput(dto) {
        const exchangeRate = await this.exchangeService.getExchangeRate(dto.supplierCurrency, dto.sellCurrency);
        let platformFeePercent = dto.customPlatformFee || 0;
        let gatewayFeePercent = dto.customGatewayFee || 0;
        let gatewayFixedFee = dto.customGatewayFixedFee || 0;
        let taxPercent = dto.customTaxPercent || 0;
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
};
exports.CalculationsService = CalculationsService;
exports.CalculationsService = CalculationsService = CalculationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(calculation_entity_1.Calculation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        pricing_service_1.PricingService,
        exchange_service_1.ExchangeService,
        presets_service_1.PresetsService,
        auth_service_1.AuthService])
], CalculationsService);
//# sourceMappingURL=calculations.service.js.map