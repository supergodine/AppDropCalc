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
exports.SignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SignUpDto {
    constructor() {
        this.currencyDefault = 'BRL';
        this.country = 'BR';
    }
}
exports.SignUpDto = SignUpDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome completo do usuário',
        example: 'João Silva',
        minLength: 2,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)({ message: 'Nome deve ser uma string' }),
    (0, class_validator_1.MinLength)(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Nome deve ter no máximo 100 caracteres' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email do usuário',
        example: 'joao@exemplo.com',
        format: 'email',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email deve ter um formato válido' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Senha do usuário',
        example: 'MinhaSenh@123',
        minLength: 8,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)({ message: 'Senha deve ser uma string' }),
    (0, class_validator_1.MinLength)(8, { message: 'Senha deve ter pelo menos 8 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Senha deve ter no máximo 100 caracteres' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Moeda padrão do usuário',
        example: 'BRL',
        default: 'BRL',
        enum: ['BRL', 'USD', 'EUR', 'ARS', 'CLP', 'COP', 'MXN'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['BRL', 'USD', 'EUR', 'ARS', 'CLP', 'COP', 'MXN'], {
        message: 'Moeda deve ser uma das suportadas',
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "currencyDefault", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'País do usuário',
        example: 'BR',
        default: 'BR',
        enum: ['BR', 'US', 'AR', 'CL', 'CO', 'MX', 'UY', 'PE'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['BR', 'US', 'AR', 'CL', 'CO', 'MX', 'UY', 'PE'], {
        message: 'País deve ser um dos suportados',
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Telefone do usuário (opcional)',
        example: '+5511999999999',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20, { message: 'Telefone deve ter no máximo 20 caracteres' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "phone", void 0);
//# sourceMappingURL=signup.dto.js.map