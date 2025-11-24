"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PricingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingService = void 0;
const common_1 = require("@nestjs/common");
let PricingService = PricingService_1 = class PricingService {
    constructor() {
        this.logger = new common_1.Logger(PricingService_1.name);
    }
    calculatePricing(input) {
        this.logger.debug('Iniciando cálculo de precificação', input);
        const convertedCost = this.convertCurrency(input.supplierPrice, input.exchangeRate);
        const totalCost = convertedCost + input.freight + input.fixedCostPerUnit;
        const totalFeesPercent = input.platformFeePercent +
            input.gatewayFeePercent +
            input.taxPercent;
        const priceByMargin = this.calculatePriceByMargin(totalCost, input.marginPercent, totalFeesPercent, input.adsCostPercent);
        const priceByMarkup = this.calculatePriceByMarkup(totalCost, input.markupPercent);
        const recommendedPrice = priceByMargin || priceByMarkup;
        const breakdown = this.calculateBreakdown(recommendedPrice, totalCost, totalFeesPercent, input.gatewayFixedFee, input.adsCostPercent, input.adsCostFixed);
        const minimumROAS = this.calculateMinimumROAS(recommendedPrice, breakdown.adsCostTotal);
        const breakEvenPrice = this.calculateBreakEvenPrice(totalCost, totalFeesPercent, input.gatewayFixedFee);
        const result = {
            productName: input.productName,
            supplierPrice: input.supplierPrice,
            supplierCurrency: input.supplierCurrency,
            convertedCost,
            freight: input.freight,
            fixedCostPerUnit: input.fixedCostPerUnit,
            totalCost,
            platformFeePercent: input.platformFeePercent,
            gatewayFeePercent: input.gatewayFeePercent,
            gatewayFixedFee: input.gatewayFixedFee,
            taxPercent: input.taxPercent,
            totalFeesPercent,
            adsCostPercent: input.adsCostPercent,
            adsCostFixed: input.adsCostFixed,
            priceByMargin,
            priceByMarkup,
            recommendedPrice,
            grossProfit: breakdown.grossProfit,
            netProfit: breakdown.netProfit,
            profitMargin: breakdown.profitMargin,
            minimumROAS,
            breakEvenPrice,
            exchangeRate: input.exchangeRate,
            sellCurrency: input.sellCurrency,
            calculatedAt: new Date(),
        };
        this.logger.debug('Cálculo concluído', result);
        return result;
    }
    convertCurrency(amount, exchangeRate) {
        return Number((amount * exchangeRate).toFixed(2));
    }
    calculatePriceByMargin(totalCost, marginPercent, feesPercent, adsCostPercent) {
        const totalDeductionsPercent = (marginPercent + feesPercent + adsCostPercent) / 100;
        if (totalDeductionsPercent >= 1) {
            this.logger.warn('Margem + Taxas + Ads >= 100%, impossível calcular preço');
            return 0;
        }
        const price = totalCost / (1 - totalDeductionsPercent);
        return Number(price.toFixed(2));
    }
    calculatePriceByMarkup(totalCost, markupPercent) {
        const price = totalCost * (1 + markupPercent / 100);
        return Number(price.toFixed(2));
    }
    calculateBreakdown(finalPrice, totalCost, feesPercent, gatewayFixedFee, adsCostPercent, adsCostFixed) {
        const feesOnPrice = (finalPrice * feesPercent / 100) + gatewayFixedFee;
        const adsCostTotal = (finalPrice * adsCostPercent / 100) + adsCostFixed;
        const grossProfit = finalPrice - totalCost;
        const netProfit = finalPrice - totalCost - feesOnPrice - adsCostTotal;
        const profitMargin = finalPrice > 0 ? (netProfit / finalPrice) * 100 : 0;
        return {
            feesOnPrice,
            adsCostTotal,
            grossProfit: Number(grossProfit.toFixed(2)),
            netProfit: Number(netProfit.toFixed(2)),
            profitMargin: Number(profitMargin.toFixed(2)),
        };
    }
    calculateMinimumROAS(finalPrice, adsCostTotal) {
        if (adsCostTotal <= 0)
            return 0;
        const roas = finalPrice / adsCostTotal;
        return Number(roas.toFixed(2));
    }
    calculateBreakEvenPrice(totalCost, feesPercent, gatewayFixedFee) {
        const price = (totalCost + gatewayFixedFee) / (1 - feesPercent / 100);
        return Number(price.toFixed(2));
    }
    simulateScenarios(input) {
        const conservative = this.calculatePricing({
            ...input,
            marginPercent: Math.max(input.marginPercent + 10, 30),
            adsCostPercent: Math.max(input.adsCostPercent - 2, 0),
        });
        const balanced = this.calculatePricing(input);
        const aggressive = this.calculatePricing({
            ...input,
            marginPercent: Math.max(input.marginPercent - 5, 10),
            adsCostPercent: input.adsCostPercent + 3,
        });
        return { conservative, balanced, aggressive };
    }
    validateInput(input) {
        const errors = [];
        if (input.supplierPrice <= 0) {
            errors.push('Preço do fornecedor deve ser maior que zero');
        }
        if (input.exchangeRate <= 0) {
            errors.push('Taxa de câmbio deve ser maior que zero');
        }
        if (input.marginPercent + input.platformFeePercent + input.gatewayFeePercent + input.taxPercent + input.adsCostPercent >= 100) {
            errors.push('Soma de margem + taxas + ads não pode ser >= 100%');
        }
        if (input.freight < 0 || input.fixedCostPerUnit < 0 || input.adsCostFixed < 0) {
            errors.push('Custos não podem ser negativos');
        }
        return {
            isValid: errors.length === 0,
            errors,
        };
    }
};
exports.PricingService = PricingService;
exports.PricingService = PricingService = PricingService_1 = __decorate([
    (0, common_1.Injectable)()
], PricingService);
//# sourceMappingURL=pricing.service.js.map