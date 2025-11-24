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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    async createAdminUser() {
        const user = await this.usersService.createAdminUser();
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            plan: user.plan,
            role: user.role,
            status: user.status,
        };
    }
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getProfile(req) {
        const user = await this.usersService.findById(req.user.sub);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return {
            id: user.id,
            email: user.email,
            name: user.name,
        };
    }
    async getAllUsers() {
        return this.usersService.findAll();
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('create-admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Criar usuário admin Diego (temporário)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createAdminUser", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter perfil completo do usuário' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os usuários (admin)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map