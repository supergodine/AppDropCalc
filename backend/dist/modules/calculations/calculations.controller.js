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
exports.CalculationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const calculations_service_1 = require("./calculations.service");
const create_calculation_dto_1 = require("./dto/create-calculation.dto");
let CalculationsController = class CalculationsController {
    constructor(calculationsService) {
        this.calculationsService = calculationsService;
    }
    async create(req, createCalculationDto) {
        return this.calculationsService.create(req.user.id, createCalculationDto);
    }
    async findAll(req, page = 1, limit = 20, search, category, favorite) {
        return this.calculationsService.findAll(req.user.id, {
            page,
            limit,
            search,
            category,
            favorite,
        });
    }
    async findOne(req, id) {
        return this.calculationsService.findOne(req.user.id, id);
    }
    async simulate(req, id) {
        return this.calculationsService.simulate(req.user.id, id);
    }
    async toggleFavorite(req, id) {
        return this.calculationsService.toggleFavorite(req.user.id, id);
    }
    async toggleArchive(req, id) {
        return this.calculationsService.toggleArchive(req.user.id, id);
    }
    async getStats(req) {
        return this.calculationsService.getStats(req.user.id);
    }
    async quickCalculation(req, createCalculationDto) {
        return this.calculationsService.quickCalculation(req.user.id, createCalculationDto);
    }
};
exports.CalculationsController = CalculationsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Criar novo cálculo de precificação',
        description: 'Calcula preço de venda automaticamente com base nos parâmetros fornecidos'
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Cálculo criado com sucesso',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Dados inválidos ou erro na API de câmbio',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Limite de cálculos atingido para plano gratuito',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_calculation_dto_1.CreateCalculationDto]),
    __metadata("design:returntype", Promise)
], CalculationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar cálculos do usuário' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Página (padrão: 1)' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Itens por página (padrão: 20)' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Buscar por nome do produto' }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false, description: 'Filtrar por categoria' }),
    (0, swagger_1.ApiQuery)({ name: 'favorite', required: false, description: 'Apenas favoritos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de cálculos',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('category')),
    __param(5, (0, common_1.Query)('favorite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, String, String, Boolean]),
    __metadata("design:returntype", Promise)
], CalculationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter cálculo específico' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Detalhes do cálculo',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Cálculo não encontrado',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CalculationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/simulate'),
    (0, swagger_1.ApiOperation)({
        summary: 'Simular diferentes cenários de precificação',
        description: 'Gera cenários conservador, balanceado e agressivo'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Simulações geradas',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CalculationsController.prototype, "simulate", null);
__decorate([
    (0, common_1.Post)(':id/favorite'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Marcar/desmarcar como favorito' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CalculationsController.prototype, "toggleFavorite", null);
__decorate([
    (0, common_1.Post)(':id/archive'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Arquivar/desarquivar cálculo' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CalculationsController.prototype, "toggleArchive", null);
__decorate([
    (0, common_1.Get)('stats/summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Estatísticas dos cálculos do usuário' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Resumo estatístico',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalculationsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Post)('quick-calc'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Cálculo rápido sem salvar',
        description: 'Para testes rápidos, apenas retorna o resultado sem persistir'
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_calculation_dto_1.CreateCalculationDto]),
    __metadata("design:returntype", Promise)
], CalculationsController.prototype, "quickCalculation", null);
exports.CalculationsController = CalculationsController = __decorate([
    (0, swagger_1.ApiTags)('calculations'),
    (0, common_1.Controller)('calculations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [calculations_service_1.CalculationsService])
], CalculationsController);
//# sourceMappingURL=calculations.controller.js.map