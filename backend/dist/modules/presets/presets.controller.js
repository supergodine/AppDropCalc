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
exports.PresetsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const presets_service_1 = require("./presets.service");
let PresetsController = class PresetsController {
    constructor(presetsService) {
        this.presetsService = presetsService;
    }
    async getPlatforms(country) {
        return this.presetsService.findAllPlatforms(country);
    }
    async getGateways(country, currency) {
        return this.presetsService.findAllGateways(country, currency);
    }
    async getPopularPlatforms(limit = 5) {
        return this.presetsService.getPopularPlatforms(Number(limit));
    }
    async getPopularGateways(limit = 5) {
        return this.presetsService.getPopularGateways(Number(limit));
    }
    async searchPlatforms(query) {
        return this.presetsService.searchPlatforms(query);
    }
    async searchGateways(query) {
        return this.presetsService.searchGateways(query);
    }
};
exports.PresetsController = PresetsController;
__decorate([
    (0, common_1.Get)('platforms'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar presets de plataformas' }),
    (0, swagger_1.ApiQuery)({ name: 'country', required: false, description: 'Filtrar por país (ISO 3166-1 alpha-2)' }),
    __param(0, (0, common_1.Query)('country')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresetsController.prototype, "getPlatforms", null);
__decorate([
    (0, common_1.Get)('gateways'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar presets de gateways de pagamento' }),
    (0, swagger_1.ApiQuery)({ name: 'country', required: false, description: 'Filtrar por país' }),
    (0, swagger_1.ApiQuery)({ name: 'currency', required: false, description: 'Filtrar por moeda' }),
    __param(0, (0, common_1.Query)('country')),
    __param(1, (0, common_1.Query)('currency')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PresetsController.prototype, "getGateways", null);
__decorate([
    (0, common_1.Get)('platforms/popular'),
    (0, swagger_1.ApiOperation)({ summary: 'Plataformas mais utilizadas' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Número de resultados (padrão: 5)' }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PresetsController.prototype, "getPopularPlatforms", null);
__decorate([
    (0, common_1.Get)('gateways/popular'),
    (0, swagger_1.ApiOperation)({ summary: 'Gateways mais utilizados' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Número de resultados (padrão: 5)' }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PresetsController.prototype, "getPopularGateways", null);
__decorate([
    (0, common_1.Get)('platforms/search'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar plataformas por nome' }),
    (0, swagger_1.ApiQuery)({ name: 'q', description: 'Termo de busca' }),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresetsController.prototype, "searchPlatforms", null);
__decorate([
    (0, common_1.Get)('gateways/search'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar gateways por nome' }),
    (0, swagger_1.ApiQuery)({ name: 'q', description: 'Termo de busca' }),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresetsController.prototype, "searchGateways", null);
exports.PresetsController = PresetsController = __decorate([
    (0, swagger_1.ApiTags)('presets'),
    (0, common_1.Controller)('presets'),
    __metadata("design:paramtypes", [presets_service_1.PresetsService])
], PresetsController);
//# sourceMappingURL=presets.controller.js.map