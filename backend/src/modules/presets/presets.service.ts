import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PresetPlatform } from './entities/preset-platform.entity';
import { Gateway } from './entities/gateway.entity';

@Injectable()
export class PresetsService {
  constructor(
    @InjectRepository(PresetPlatform)
    private readonly platformRepository: Repository<PresetPlatform>,
    @InjectRepository(Gateway)
    private readonly gatewayRepository: Repository<Gateway>,
  ) {}

  /**
   * Listar plataformas ativas
   */
  async findAllPlatforms(country?: string) {
    const where: any = { isActive: true };
    
    const platforms = await this.platformRepository.find({
      where,
      order: { usageCount: 'DESC', name: 'ASC' },
    });

    // Filtrar por país se especificado
    const filtered = country 
      ? platforms.filter(p => p.supportsCountry(country))
      : platforms;

    return {
      platforms: filtered,
      message: 'Presets de plataformas carregados',
    };
  }

  /**
   * Listar gateways ativos
   */
  async findAllGateways(country?: string, currency?: string) {
    const gateways = await this.gatewayRepository.find({
      where: { isActive: true },
      order: { usageCount: 'DESC', name: 'ASC' },
    });

    // Filtrar por país e moeda se especificado
    let filtered = gateways;
    
    if (country) {
      filtered = filtered.filter(g => g.supportsCountry(country));
    }
    
    if (currency) {
      filtered = filtered.filter(g => g.supportsCurrency(currency));
    }

    return {
      gateways: filtered,
      message: 'Presets de gateways carregados',
    };
  }

  /**
   * Buscar plataforma por ID
   */
  async findPlatformById(id: string): Promise<PresetPlatform | null> {
    return this.platformRepository.findOne({
      where: { id, isActive: true },
    });
  }

  /**
   * Buscar gateway por ID
   */
  async findGatewayById(id: string): Promise<Gateway | null> {
    return this.gatewayRepository.findOne({
      where: { id, isActive: true },
    });
  }

  /**
   * Incrementar contador de uso da plataforma
   */
  async incrementPlatformUsage(id: string): Promise<void> {
    await this.platformRepository.increment({ id }, 'usageCount', 1);
  }

  /**
   * Incrementar contador de uso do gateway
   */
  async incrementGatewayUsage(id: string): Promise<void> {
    await this.gatewayRepository.increment({ id }, 'usageCount', 1);
  }

  /**
   * Obter plataformas populares
   */
  async getPopularPlatforms(limit = 5) {
    const platforms = await this.platformRepository.find({
      where: { isActive: true },
      order: { usageCount: 'DESC' },
      take: limit,
    });

    return {
      platforms,
      message: 'Plataformas populares carregadas',
    };
  }

  /**
   * Obter gateways populares
   */
  async getPopularGateways(limit = 5) {
    const gateways = await this.gatewayRepository.find({
      where: { isActive: true },
      order: { usageCount: 'DESC' },
      take: limit,
    });

    return {
      gateways,
      message: 'Gateways populares carregados',
    };
  }

  /**
   * Buscar plataformas por nome ou tipo
   */
  async searchPlatforms(query: string) {
    const platforms = await this.platformRepository
      .createQueryBuilder('platform')
      .where('platform.isActive = :isActive', { isActive: true })
      .andWhere(
        '(LOWER(platform.name) LIKE LOWER(:query) OR LOWER(platform.description) LIKE LOWER(:query))',
        { query: `%${query}%` },
      )
      .orderBy('platform.usageCount', 'DESC')
      .getMany();

    return {
      platforms,
      message: `${platforms.length} plataformas encontradas`,
    };
  }

  /**
   * Buscar gateways por nome ou tipo
   */
  async searchGateways(query: string) {
    const gateways = await this.gatewayRepository
      .createQueryBuilder('gateway')
      .where('gateway.isActive = :isActive', { isActive: true })
      .andWhere(
        '(LOWER(gateway.name) LIKE LOWER(:query) OR LOWER(gateway.description) LIKE LOWER(:query))',
        { query: `%${query}%` },
      )
      .orderBy('gateway.usageCount', 'DESC')
      .getMany();

    return {
      gateways,
      message: `${gateways.length} gateways encontrados`,
    };
  }
}