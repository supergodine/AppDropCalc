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
exports.ExchangeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const exchange_service_1 = require("./exchange.service");
let ExchangeController = class ExchangeController {
    constructor(exchangeService) {
        this.exchangeService = exchangeService;
    }
    async getRate(from, to) {
        const rate = await this.exchangeService.getExchangeRate(from, to);
        return {
            from,
            to,
            rate,
            timestamp: new Date().toISOString(),
        };
    }
    getSupportedCurrencies() {
        return {
            currencies: this.exchangeService.getSupportedCurrencies(),
            message: 'Moedas suportadas carregadas',
        };
    }
    async getMultipleRates(base, targets) {
        const targetArray = targets.split(',').map(t => t.trim());
        const rates = await this.exchangeService.getMultipleRates(base, targetArray);
        return {
            base,
            rates,
            timestamp: new Date().toISOString(),
        };
    }
};
exports.ExchangeController = ExchangeController;
__decorate([
    (0, common_1.Get)('rate'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter taxa de câmbio entre duas moedas' }),
    (0, swagger_1.ApiQuery)({ name: 'from', description: 'Moeda de origem', example: 'USD' }),
    (0, swagger_1.ApiQuery)({ name: 'to', description: 'Moeda de destino', example: 'BRL' }),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ExchangeController.prototype, "getRate", null);
__decorate([
    (0, common_1.Get)('currencies'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar moedas suportadas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExchangeController.prototype, "getSupportedCurrencies", null);
__decorate([
    (0, common_1.Get)('multiple'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter múltiplas taxas de câmbio' }),
    (0, swagger_1.ApiQuery)({ name: 'base', description: 'Moeda base', example: 'USD' }),
    (0, swagger_1.ApiQuery)({ name: 'targets', description: 'Moedas de destino (separadas por vírgula)', example: 'BRL,EUR,ARS' }),
    __param(0, (0, common_1.Query)('base')),
    __param(1, (0, common_1.Query)('targets')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ExchangeController.prototype, "getMultipleRates", null);
exports.ExchangeController = ExchangeController = __decorate([
    (0, swagger_1.ApiTags)('exchange'),
    (0, common_1.Controller)('exchange'),
    __metadata("design:paramtypes", [exchange_service_1.ExchangeService])
], ExchangeController);
//# sourceMappingURL=exchange.controller.js.map