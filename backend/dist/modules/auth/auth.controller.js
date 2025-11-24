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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const forgot_password_dto_1 = require("./dto/forgot-password.dto");
const reset_password_dto_1 = require("./dto/reset-password.dto");
const mail_service_1 = require("./mail.service");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const signup_dto_1 = require("./dto/signup.dto");
const login_dto_1 = require("./dto/login.dto");
const auth_response_dto_1 = require("./dto/auth-response.dto");
let AuthController = class AuthController {
    constructor(authService, mailService) {
        this.authService = authService;
        this.mailService = mailService;
    }
    async forgotPassword(body) {
        const token = Math.random().toString(36).substring(2) + Date.now();
        await this.mailService.sendPasswordRecovery(body.email, token);
        return { message: 'E-mail de recuperação enviado, se o e-mail existir.' };
    }
    async resetPassword(body) {
        const result = await this.authService.resetPassword(body);
        return result;
    }
    async signUp(signUpDto) {
        return this.authService.signUp(signUpDto);
    }
    async login(req) {
        console.log('🚀 Login controller chamado');
        console.log('📝 Dados do usuário:', req.user);
        try {
            const result = await this.authService.login(req.user);
            console.log('✅ Login service retornou:', result);
            return result;
        }
        catch (error) {
            console.error('❌ Erro no login service:', error);
            throw error;
        }
    }
    async testLogin(loginDto) {
        console.log('🧪 Test login chamado com:', loginDto);
        try {
            const user = await this.authService.findUserByEmail(loginDto.email);
            let debugInfo = { email: loginDto.email };
            if (!user) {
                debugInfo.found = false;
                return {
                    success: false,
                    message: 'Usuário não encontrado',
                    debug: debugInfo
                };
            }
            debugInfo.found = true;
            debugInfo.userId = user.id;
            debugInfo.status = user.status;
            debugInfo.passwordHash = user.passwordHash;
            debugInfo.senhaEnviada = loginDto.password;
            const isPasswordValid = user.passwordHash ? await this.authService.comparePassword(loginDto.password, user.passwordHash) : false;
            debugInfo.senhaValida = isPasswordValid;
            if (!isPasswordValid) {
                return {
                    success: false,
                    message: 'Senha inválida',
                    debug: debugInfo
                };
            }
            if (user.status !== 'active') {
                return {
                    success: false,
                    message: 'Usuário não está ativo',
                    debug: debugInfo
                };
            }
            const result = await this.authService.login(user);
            return {
                success: true,
                message: 'Login realizado com sucesso',
                data: result,
                debug: debugInfo
            };
        }
        catch (error) {
            console.error('❌ Erro no test login:', error);
            return {
                success: false,
                message: error.message,
                debug: {
                    error: error.message,
                    stack: error.stack
                }
            };
        }
    }
    async getProfile(req) {
        return {
            user: req.user,
            message: 'Perfil carregado com sucesso',
        };
    }
    async refresh(req) {
        return this.authService.refresh(req.user);
    }
    async logout(req) {
        return {
            message: 'Logout realizado com sucesso',
            timestamp: new Date().toISOString(),
        };
    }
    async createAdmin() {
        return this.authService.createAdminUser();
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Solicitar recuperação de senha (envio de e-mail)' }),
    (0, swagger_1.ApiBody)({ type: forgot_password_dto_1.ForgotPasswordDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Resetar senha usando token de recuperação' }),
    (0, swagger_1.ApiBody)({ type: reset_password_dto_1.ResetPasswordDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('signup'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Criar nova conta de usuário' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Usuário criado com sucesso',
        type: auth_response_dto_1.AuthResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Dados inválidos ou email já existe',
    }),
    (0, swagger_1.ApiBody)({ type: signup_dto_1.SignUpDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login com email e senha' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login realizado com sucesso',
        type: auth_response_dto_1.AuthResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Credenciais inválidas',
    }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('test-login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Teste de login direto (sem guard)' }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "testLogin", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obter perfil do usuário autenticado' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Perfil do usuário',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Token inválido ou expirado',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Renovar token de acesso' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Token renovado com sucesso',
        type: auth_response_dto_1.AuthResponseDto,
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Logout do usuário' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logout realizado com sucesso',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('create-admin'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Criar usuário administrador (apenas primeira vez)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Administrador criado com sucesso',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createAdmin", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        mail_service_1.MailService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map