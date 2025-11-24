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
exports.PresetPlatform = exports.PlatformType = void 0;
const typeorm_1 = require("typeorm");
var PlatformType;
(function (PlatformType) {
    PlatformType["ECOMMERCE"] = "ecommerce";
    PlatformType["MARKETPLACE"] = "marketplace";
    PlatformType["SOCIAL"] = "social";
    PlatformType["CUSTOM"] = "custom";
})(PlatformType || (exports.PlatformType = PlatformType = {}));
let PresetPlatform = class PresetPlatform {
    getTotalFeeForAmount(amount, country) {
        let percentFee = this.feePercent;
        if (country && this.additionalFees?.countryFees?.[country]) {
            percentFee = this.additionalFees.countryFees[country];
        }
        return (amount * percentFee / 100) + this.fixedFee;
    }
    supportsCountry(country) {
        return this.supportedCountries.length === 0 ||
            this.supportedCountries.includes(country.toUpperCase());
    }
    getDisplayName() {
        return this.name;
    }
    hasVolumeDiscounts() {
        return this.additionalFees?.volumeDiscounts &&
            this.additionalFees.volumeDiscounts.length > 0;
    }
};
exports.PresetPlatform = PresetPlatform;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PresetPlatform.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: 'ecommerce' }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], PresetPlatform.prototype, "feePercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], PresetPlatform.prototype, "fixedFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, default: 'BRL' }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', array: true, default: '{}' }),
    __metadata("design:type", Array)
], PresetPlatform.prototype, "supportedCountries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "websiteUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PresetPlatform.prototype, "logoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], PresetPlatform.prototype, "additionalFees", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], PresetPlatform.prototype, "integrationConfig", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], PresetPlatform.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PresetPlatform.prototype, "isCustom", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PresetPlatform.prototype, "usageCount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PresetPlatform.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PresetPlatform.prototype, "updatedAt", void 0);
exports.PresetPlatform = PresetPlatform = __decorate([
    (0, typeorm_1.Entity)('preset_platforms')
], PresetPlatform);
//# sourceMappingURL=preset-platform.entity.js.map