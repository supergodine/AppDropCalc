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
exports.ExchangeController = exports.CalcController = void 0;
const common_1 = require("@nestjs/common");
const calc_service_1 = require("./calc.service");
const exchange_service_1 = require("../exchange/exchange.service");
let CalcController = class CalcController {
    constructor(calcService) {
        this.calcService = calcService;
    }
    async calcular(dados) {
        return await this.calcService.calcularPrecoIdeal(dados);
    }
    getPlatforms() {
        return this.calcService.getPlatforms();
    }
    getGateways() {
        return this.calcService.getGateways();
    }
};
exports.CalcController = CalcController;
__decorate([
    (0, common_1.Post)('calcular'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalcController.prototype, "calcular", null);
__decorate([
    (0, common_1.Get)('platforms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalcController.prototype, "getPlatforms", null);
__decorate([
    (0, common_1.Get)('gateways'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalcController.prototype, "getGateways", null);
exports.CalcController = CalcController = __decorate([
    (0, common_1.Controller)('calc'),
    __metadata("design:paramtypes", [calc_service_1.CalcService])
], CalcController);
let ExchangeController = class ExchangeController {
    constructor(exchangeService) {
        this.exchangeService = exchangeService;
    }
    async getCurrencies() {
        return await this.exchangeService.getSupportedCurrencies();
    }
    async getExchangeRate(from, to) {
        const rate = await this.exchangeService.getCurrentRate(from, to);
        return { from, to, rate, timestamp: new Date().toISOString() };
    }
};
exports.ExchangeController = ExchangeController;
__decorate([
    (0, common_1.Get)('currencies'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExchangeController.prototype, "getCurrencies", null);
__decorate([
    (0, common_1.Get)('rate/:from/:to'),
    __param(0, (0, common_1.Param)('from')),
    __param(1, (0, common_1.Param)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ExchangeController.prototype, "getExchangeRate", null);
exports.ExchangeController = ExchangeController = __decorate([
    (0, common_1.Controller)('exchange'),
    __metadata("design:paramtypes", [exchange_service_1.ExchangeService])
], ExchangeController);
//# sourceMappingURL=calc.controller.js.map