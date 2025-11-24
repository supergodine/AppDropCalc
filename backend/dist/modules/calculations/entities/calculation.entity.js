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
exports.Calculation = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const preset_platform_entity_1 = require("../../presets/entities/preset-platform.entity");
const gateway_entity_1 = require("../../presets/entities/gateway.entity");
let Calculation = class Calculation {
    getROAS() {
        if (this.adsCostFixed <= 0 && this.adsCostPercent <= 0)
            return 0;
        const adsCost = this.adsCostFixed + (this.finalPrice * this.adsCostPercent / 100);
        return adsCost > 0 ? this.finalPrice / adsCost : 0;
    }
    getProfitMargin() {
        const totalCost = this.resultBreakdown?.totalCost || 0;
        return this.finalPrice > 0 ? ((this.finalPrice - totalCost) / this.finalPrice) * 100 : 0;
    }
    isRecent() {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return this.createdAt > oneWeekAgo;
    }
};
exports.Calculation = Calculation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Calculation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Calculation.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Calculation.prototype, "supplierPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Calculation.prototype, "supplierCurrency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Calculation.prototype, "sellCurrency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], Calculation.prototype, "exchangeRate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "freight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "fixedCostPerUnit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "marginPercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "markupPercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "adsCostPercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Calculation.prototype, "adsCostFixed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Calculation.prototype, "finalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], Calculation.prototype, "resultBreakdown", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Calculation.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', array: true, default: '{}' }),
    __metadata("design:type", Array)
], Calculation.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Calculation.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Calculation.prototype, "dimensions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Calculation.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Calculation.prototype, "isFavorite", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Calculation.prototype, "isArchived", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Calculation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Calculation.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Calculation.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Calculation.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => preset_platform_entity_1.PresetPlatform, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'platformId' }),
    __metadata("design:type", preset_platform_entity_1.PresetPlatform)
], Calculation.prototype, "platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Calculation.prototype, "platformId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gateway_entity_1.Gateway, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'gatewayId' }),
    __metadata("design:type", gateway_entity_1.Gateway)
], Calculation.prototype, "gateway", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Calculation.prototype, "gatewayId", void 0);
exports.Calculation = Calculation = __decorate([
    (0, typeorm_1.Entity)('calculations')
], Calculation);
//# sourceMappingURL=calculation.entity.js.map