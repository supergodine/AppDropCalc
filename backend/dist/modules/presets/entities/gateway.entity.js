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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gateway = exports.GatewayType = void 0;
const typeorm_1 = require("typeorm");
var GatewayType;
(function (GatewayType) {
    GatewayType["CREDIT_CARD"] = "credit_card";
    GatewayType["DEBIT_CARD"] = "debit_card";
    GatewayType["PIX"] = "pix";
    GatewayType["BOLETO"] = "boleto";
    GatewayType["PAYPAL"] = "paypal";
    GatewayType["DIGITAL_WALLET"] = "digital_wallet";
    GatewayType["CRYPTO"] = "crypto";
    GatewayType["OTHER"] = "other";
})(GatewayType || (exports.GatewayType = GatewayType = {}));
let Gateway = class Gateway {
    getFeeForPaymentType(amount, paymentType, isInternational = false) {
        let percent = this.feePercent;
        let fixed = this.fixedFee;
        if (this.feeStructure && this.feeStructure[paymentType]) {
            const typeConfig = this.feeStructure[paymentType];
            if (typeConfig && typeof typeConfig === 'object') {
                percent = typeConfig.percent || percent;
                fixed = typeConfig.fixed || fixed;
            }
        }
        if (isInternational && this.feeStructure?.international) {
            percent += this.feeStructure.international.percent;
            fixed += this.feeStructure.international.fixed;
        }
        const total = (amount * percent / 100) + fixed;
        return { percent, fixed, total };
    }
    supportsPaymentType(type) {
        return this.supportedTypes.includes(type);
    }
    supportsCountry(country) {
        return this.supportedCountries.length === 0 ||
            this.supportedCountries.includes(country.toUpperCase());
    }
    supportsCurrency(currency) {
        return this.supportedCurrencies.length === 0 ||
            this.supportedCurrencies.includes(currency.toUpperCase());
    }
    getDisplayName() {
        return this.name;
    }
};
exports.Gateway = Gateway;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Gateway.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Gateway.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], Gateway.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Gateway.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: 'credit_card' }),
    __metadata("design:type", String)
], Gateway.prototype, "primaryType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Gateway.prototype, "supportedTypes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Gateway.prototype, "feePercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Gateway.prototype, "fixedFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: 'BRL' }),
    __metadata("design:type", String)
], Gateway.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', array: true, default: '{}' }),
    __metadata("design:type", Array)
], Gateway.prototype, "supportedCountries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', array: true, default: '{}' }),
    __metadata("design:type", Array)
], Gateway.prototype, "supportedCurrencies", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Gateway.prototype, "feeStructure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Gateway.prototype, "processingTimes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Gateway.prototype, "websiteUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Gateway.prototype, "logoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Gateway.prototype, "integrationConfig", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Gateway.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Gateway.prototype, "isCustom", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Gateway.prototype, "usageCount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Gateway.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Gateway.prototype, "updatedAt", void 0);
exports.Gateway = Gateway = __decorate([
    (0, typeorm_1.Entity)('gateways')
], Gateway);
//# sourceMappingURL=gateway.entity.js.map