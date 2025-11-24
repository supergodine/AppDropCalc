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
exports.AuthResponseDto = exports.UserResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserResponseDto {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.currencyDefault = user.currencyDefault;
        this.country = user.country;
        this.plan = user.plan;
        this.status = user.status;
        this.role = user.role;
        this.avatar = user.avatar;
        this.calculationsCount = user.calculationsCount;
        this.createdAt = user.createdAt;
    }
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único do usuário',
        example: 'uuid-v4-string',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do usuário',
        example: 'João Silva',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email do usuário',
        example: 'joao@exemplo.com',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Moeda padrão',
        example: 'BRL',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "currencyDefault", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'País do usuário',
        example: 'BR',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Plano do usuário',
        example: 'free',
        enum: ['free', 'pro', 'premium'],
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status da conta',
        example: 'active',
        enum: ['active', 'inactive', 'suspended'],
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Função do usuário',
        example: 'user',
        enum: ['user', 'admin'],
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL do avatar',
        example: 'https://example.com/avatar.jpg',
        required: false,
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de cálculos realizados',
        example: 25,
    }),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "calculationsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de criação da conta',
        example: '2024-01-15T10:30:00Z',
    }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "createdAt", void 0);
class AuthResponseDto {
    constructor() {
        this.tokenType = 'Bearer';
    }
}
exports.AuthResponseDto = AuthResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Token de acesso JWT',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    }),
    __metadata("design:type", String)
], AuthResponseDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo do token',
        example: 'Bearer',
        default: 'Bearer',
    }),
    __metadata("design:type", String)
], AuthResponseDto.prototype, "tokenType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tempo de expiração do token em segundos',
        example: 604800,
    }),
    __metadata("design:type", Number)
], AuthResponseDto.prototype, "expiresIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dados do usuário autenticado',
        type: () => UserResponseDto,
    }),
    __metadata("design:type", UserResponseDto)
], AuthResponseDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mensagem de sucesso',
        example: 'Login realizado com sucesso',
    }),
    __metadata("design:type", String)
], AuthResponseDto.prototype, "message", void 0);
//# sourceMappingURL=auth-response.dto.js.map