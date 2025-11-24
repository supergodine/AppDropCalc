import { Repository } from 'typeorm';
import { PresetPlatform } from './entities/preset-platform.entity';
import { Gateway } from './entities/gateway.entity';
export declare class PresetsService {
    private readonly platformRepository;
    private readonly gatewayRepository;
    constructor(platformRepository: Repository<PresetPlatform>, gatewayRepository: Repository<Gateway>);
    findAllPlatforms(country?: string): Promise<{
        platforms: PresetPlatform[];
        message: string;
    }>;
    findAllGateways(country?: string, currency?: string): Promise<{
        gateways: Gateway[];
        message: string;
    }>;
    findPlatformById(id: string): Promise<PresetPlatform | null>;
    findGatewayById(id: string): Promise<Gateway | null>;
    incrementPlatformUsage(id: string): Promise<void>;
    incrementGatewayUsage(id: string): Promise<void>;
    getPopularPlatforms(limit?: number): Promise<{
        platforms: PresetPlatform[];
        message: string;
    }>;
    getPopularGateways(limit?: number): Promise<{
        gateways: Gateway[];
        message: string;
    }>;
    searchPlatforms(query: string): Promise<{
        platforms: PresetPlatform[];
        message: string;
    }>;
    searchGateways(query: string): Promise<{
        gateways: Gateway[];
        message: string;
    }>;
}
