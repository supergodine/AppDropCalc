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
exports.CreateCalculationDto = exports.DimensionsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class DimensionsDto {
}
exports.DimensionsDto = DimensionsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comprimento', example: 15 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DimensionsDto.prototype, "length", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Largura', example: 8 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DimensionsDto.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Altura', example: 2 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DimensionsDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unidade de medida',
        example: 'cm',
        enum: ['cm', 'in']
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['cm', 'in']),
    __metadata("design:type", String)
], DimensionsDto.prototype, "unit", void 0);
class CreateCalculationDto {
    constructor() {
        this.freight = 0;
        this.fixedCostPerUnit = 0;
        this.marginPercent = 30;
        this.markupPercent = 0;
        this.adsCostPercent = 0;
        this.adsCostFixed = 0;
        this.tags = [];
    }
}
exports.CreateCalculationDto = CreateCalculationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do produto',
        example: 'Smartphone XYZ',
        maxLength: 255,
    }),
    (0, class_validator_1.IsString)({ message: 'Nome do produto deve ser uma string' }),
    __metadata("design:type", String)
], CreateCalculationDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Preço do fornecedor',
        example: 150.00,
        minimum: 0.01,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'Preço do fornecedor deve ser um número' }),
    (0, class_validator_1.Min)(0.01, { message: 'Preço do fornecedor deve ser maior que zero' }),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "supplierPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Moeda do fornecedor',
        example: 'USD',
        enum: ['USD', 'EUR', 'BRL', 'ARS', 'CLP', 'COP', 'MXN'],
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['USD', 'EUR', 'BRL', 'ARS', 'CLP', 'COP', 'MXN']),
    __metadata("design:type", String)
], CreateCalculationDto.prototype, "supplierCurrency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Moeda de venda',
        example: 'BRL',
        enum: ['USD', 'EUR', 'BRL', 'ARS', 'CLP', 'COP', 'MXN'],
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['USD', 'EUR', 'BRL', 'ARS', 'CLP', 'COP', 'MXN']),
    __metadata("design:type", String)
], CreateCalculationDto.prototype, "sellCurrency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Custo de frete',
        example: 25.00,
        required: false,
        default: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Frete deve ser um número' }),
    (0, class_validator_1.Min)(0, { message: 'Frete não pode ser negativo' }),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "freight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Custo fixo por unidade (embalagem, etc)',
        example: 5.00,
        required: false,
        default: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Custo fixo deve ser um número' }),
    (0, class_validator_1.Min)(0, { message: 'Custo fixo não pode ser negativo' }),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "fixedCostPerUnit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Margem desejada em porcentagem',
        example: 30,
        minimum: 0,
        maximum: 95,
        required: false,
        default: 30,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Margem deve ser um número' }),
    (0, class_validator_1.Min)(0, { message: 'Margem não pode ser negativa' }),
    (0, class_validator_1.Max)(95, { message: 'Margem não pode ser maior que 95%' }),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "marginPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Markup alternativo em porcentagem',
        example: 100,
        minimum: 0,
        required: false,
        default: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Markup deve ser um número' }),
    (0, class_validator_1.Min)(0, { message: 'Markup não pode ser negativo' }),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "markupPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Custo de anúncios em porcentagem do preço de venda',
        example: 15,
        minimum: 0,
        maximum: 50,
        required: false,
        default: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Custo de ads (%) deve ser um número' }),
    (0, class_validator_1.Min)(0, { message: 'Custo de ads não pode ser negativo' }),
    (0, class_validator_1.Max)(50, { message: 'Custo de ads não pode ser maior que 50%' }),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "adsCostPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Custo fixo de anúncios por venda',
        example: 10.00,
        required: false,
        default: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Custo fixo de ads deve ser um número' }),
    (0, class_validator_1.Min)(0, { message: 'Custo fixo de ads não pode ser negativo' }),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "adsCostFixed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do preset de plataforma',
        example: 'uuid-v4-string',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(4, { message: 'ID da plataforma deve ser um UUID válido' }),
    __metadata("design:type", String)
], CreateCalculationDto.prototype, "platformId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do preset de gateway',
        example: 'uuid-v4-string',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(4, { message: 'ID do gateway deve ser um UUID válido' }),
    __metadata("design:type", String)
], CreateCalculationDto.prototype, "gatewayId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Peso do produto em kg',
        example: 0.5,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Peso deve ser um número' }),
    (0, class_validator_1.Min)(0, { message: 'Peso não pode ser negativo' }),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dimensões do produto',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DimensionsDto),
    __metadata("design:type", DimensionsDto)
], CreateCalculationDto.prototype, "dimensions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Categoria do produto',
        example: 'Eletrônicos',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCalculationDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tags para organização',
        example: ['smartphone', 'tech', 'importado'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateCalculationDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Observações adicionais',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCalculationDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Taxa da plataforma customizada (%)',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(50),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "customPlatformFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Taxa do gateway customizada (%)',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(20),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "customGatewayFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Taxa fixa do gateway customizada',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "customGatewayFixedFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Taxa de impostos customizada (%)',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(50),
    __metadata("design:type", Number)
], CreateCalculationDto.prototype, "customTaxPercent", void 0);
//# sourceMappingURL=create-calculation.dto.js.map