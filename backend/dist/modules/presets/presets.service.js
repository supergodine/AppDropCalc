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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const preset_platform_entity_1 = require("./entities/preset-platform.entity");
const gateway_entity_1 = require("./entities/gateway.entity");
let PresetsService = class PresetsService {
    constructor(platformRepository, gatewayRepository) {
        this.platformRepository = platformRepository;
        this.gatewayRepository = gatewayRepository;
    }
    async findAllPlatforms(country) {
        const where = { isActive: true };
        const platforms = await this.platformRepository.find({
            where,
            order: { usageCount: 'DESC', name: 'ASC' },
        });
        const filtered = country
            ? platforms.filter(p => p.supportsCountry(country))
            : platforms;
        return {
            platforms: filtered,
            message: 'Presets de plataformas carregados',
        };
    }
    async findAllGateways(country, currency) {
        const gateways = await this.gatewayRepository.find({
            where: { isActive: true },
            order: { usageCount: 'DESC', name: 'ASC' },
        });
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
    async findPlatformById(id) {
        return this.platformRepository.findOne({
            where: { id, isActive: true },
        });
    }
    async findGatewayById(id) {
        return this.gatewayRepository.findOne({
            where: { id, isActive: true },
        });
    }
    async incrementPlatformUsage(id) {
        await this.platformRepository.increment({ id }, 'usageCount', 1);
    }
    async incrementGatewayUsage(id) {
        await this.gatewayRepository.increment({ id }, 'usageCount', 1);
    }
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
    async searchPlatforms(query) {
        const platforms = await this.platformRepository
            .createQueryBuilder('platform')
            .where('platform.isActive = :isActive', { isActive: true })
            .andWhere('(LOWER(platform.name) LIKE LOWER(:query) OR LOWER(platform.description) LIKE LOWER(:query))', { query: `%${query}%` })
            .orderBy('platform.usageCount', 'DESC')
            .getMany();
        return {
            platforms,
            message: `${platforms.length} plataformas encontradas`,
        };
    }
    async searchGateways(query) {
        const gateways = await this.gatewayRepository
            .createQueryBuilder('gateway')
            .where('gateway.isActive = :isActive', { isActive: true })
            .andWhere('(LOWER(gateway.name) LIKE LOWER(:query) OR LOWER(gateway.description) LIKE LOWER(:query))', { query: `%${query}%` })
            .orderBy('gateway.usageCount', 'DESC')
            .getMany();
        return {
            gateways,
            message: `${gateways.length} gateways encontrados`,
        };
    }
};
exports.PresetsService = PresetsService;
exports.PresetsService = PresetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(preset_platform_entity_1.PresetPlatform)),
    __param(1, (0, typeorm_1.InjectRepository)(gateway_entity_1.Gateway)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PresetsService);
//# sourceMappingURL=presets.service.js.map