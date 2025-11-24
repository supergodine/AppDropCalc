import { PresetsService } from './presets.service';
export declare class PresetsController {
    private readonly presetsService;
    constructor(presetsService: PresetsService);
    getPlatforms(country?: string): Promise<{
        platforms: import("./entities/preset-platform.entity").PresetPlatform[];
        message: string;
    }>;
    getGateways(country?: string, currency?: string): Promise<{
        gateways: import("./entities/gateway.entity").Gateway[];
        message: string;
    }>;
    getPopularPlatforms(limit?: number): Promise<{
        platforms: import("./entities/preset-platform.entity").PresetPlatform[];
        message: string;
    }>;
    getPopularGateways(limit?: number): Promise<{
        gateways: import("./entities/gateway.entity").Gateway[];
        message: string;
    }>;
    searchPlatforms(query: string): Promise<{
        platforms: import("./entities/preset-platform.entity").PresetPlatform[];
        message: string;
    }>;
    searchGateways(query: string): Promise<{
        gateways: import("./entities/gateway.entity").Gateway[];
        message: string;
    }>;
}
