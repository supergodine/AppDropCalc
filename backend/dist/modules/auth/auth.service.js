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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../users/entities/user.entity");
const auth_response_dto_1 = require("./dto/auth-response.dto");
let AuthService = class AuthService {
    async resetPassword(dto) {
        const { token, newPassword } = dto;
        console.log(`[resetPassword] Iniciando reset para token: ${token}`);
        const user = await this.userRepository.findOne({ where: { passwordResetToken: token } });
        if (!user) {
            console.warn(`[resetPassword] Token inválido ou usuário não encontrado: ${token}`);
            return { success: false, message: 'Token inválido ou expirado' };
        }
        console.log(`[resetPassword] Usuário encontrado: ${user.email}`);
        if (!user.passwordResetExpires || user.passwordResetExpires < new Date()) {
            console.warn(`[resetPassword] Token expirado para usuário: ${user.email}`);
            return { success: false, message: 'Token expirado' };
        }
        if (!newPassword || newPassword.length < 8) {
            console.warn(`[resetPassword] Nova senha muito curta para usuário: ${user.email}`);
            return { success: false, message: 'A senha deve ter pelo menos 8 caracteres' };
        }
        const saltRounds = 12;
        user.passwordHash = await bcrypt.hash(newPassword, saltRounds);
        user.passwordResetToken = null;
        user.passwordResetExpires = null;
        await this.userRepository.save(user);
        console.log(`[resetPassword] Senha redefinida com sucesso para usuário: ${user.email}`);
        return { success: true, message: 'Senha redefinida com sucesso' };
    }
    async findUserByEmail(email) {
        return await this.userRepository.findOne({ where: { email } });
    }
    async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async signUp(signUpDto) {
        const { email, password, ...userData } = signUpDto;
        const existingUser = await this.userRepository.findOne({
            where: { email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email já está em uso');
        }
        if (!password || password.length < 8) {
            throw new common_1.BadRequestException('A senha deve ter pelo menos 8 caracteres');
        }
        const saltRounds = 12;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const user = this.userRepository.create({
            ...userData,
            email,
            passwordHash,
            status: user_entity_1.UserStatus.ACTIVE,
        });
        const savedUser = await this.userRepository.save(user);
        console.log('✅ Usuário criado:', savedUser.email, 'Status:', savedUser.status);
        return this.generateAuthResponse(savedUser, 'Conta criada com sucesso');
    }
    async validateUser(email, password) {
        try {
            console.log('🔍 Validando usuário:', email);
            const user = await this.userRepository.findOne({ where: { email } });
            if (!user) {
                console.warn('Usuário não encontrado:', email);
                return null;
            }
            if (!user.passwordHash) {
                console.warn('Usuário sem senha cadastrada:', email);
                return null;
            }
            const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
            if (!isPasswordValid) {
                console.warn('Senha inválida para usuário:', email);
                return null;
            }
            await this.userRepository.update(user.id, { lastLoginAt: new Date() });
            console.log('✅ Login validado com sucesso para:', email);
            return user;
        }
        catch (error) {
            console.error('Erro ao validar usuário:', error);
            throw new Error('Erro interno na validação de login');
        }
    }
    async login(user) {
        if (user.email === 'massuplas@gmail.com') {
            user.plan = user_entity_1.UserPlan.PREMIUM;
            user.role = user_entity_1.UserRole.ADMIN;
        }
        if (user.googleId) {
            if (!user.email || !user.googleId) {
                throw new common_1.UnauthorizedException('Usuário Google inválido');
            }
        }
        else {
            if (user.status !== 'active') {
                throw new common_1.UnauthorizedException('Usuário inativo');
            }
        }
        const payload = { sub: user.id, email: user.email };
        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken,
            tokenType: 'Bearer',
            expiresIn: 604800,
            message: 'Login realizado com sucesso',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                currencyDefault: user.currencyDefault,
                country: user.country,
                plan: user.plan,
                status: user.status,
                role: user.role,
                createdAt: user.createdAt,
                calculationsCount: 0
            },
        };
    }
    async validateGoogleUser(googleProfile) {
        const { id: googleId, emails, name, photos } = googleProfile;
        const email = emails[0]?.value;
        if (!email) {
            throw new common_1.BadRequestException('Email não encontrado no perfil Google');
        }
        let user = await this.userRepository.findOne({
            where: [{ email }, { googleId }],
        });
        if (user) {
            if (!user.googleId) {
                user.googleId = googleId;
            }
            if (!user.avatar && photos?.[0]?.value) {
                user.avatar = photos[0].value;
            }
            user.lastLoginAt = new Date();
            return await this.userRepository.save(user);
        }
        user = this.userRepository.create({
            email,
            name: name?.givenName + ' ' + name?.familyName || email.split('@')[0],
            googleId,
            avatar: photos?.[0]?.value,
            lastLoginAt: new Date(),
        });
        return await this.userRepository.save(user);
    }
    async handleGoogleLogin(googleUser) {
        const { id, email, name } = googleUser;
        let user = await this.userRepository.findOne({
            where: { email },
        });
        if (user) {
            user.lastLoginAt = new Date();
            await this.userRepository.save(user);
        }
        else {
            user = this.userRepository.create({
                email,
                name: name || email.split('@')[0],
                googleId: id,
                lastLoginAt: new Date(),
            });
            user = await this.userRepository.save(user);
        }
        const payload = { sub: user.id, email: user.email };
        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken,
            tokenType: 'Bearer',
            expiresIn: 604800,
            message: 'Login realizado com sucesso',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                currencyDefault: user.currencyDefault,
                country: user.country,
                plan: user.plan,
                status: user.status,
                role: user.role,
                createdAt: user.createdAt,
                calculationsCount: 0
            },
        };
    }
    async refresh(user) {
        const currentUser = await this.userRepository.findOne({
            where: { id: user.id },
        });
        if (!currentUser) {
            throw new common_1.UnauthorizedException('Usuário não encontrado');
        }
        return this.generateAuthResponse(currentUser, 'Token renovado com sucesso');
    }
    generateAuthResponse(user, message) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            plan: user.plan,
        };
        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken,
            tokenType: 'Bearer',
            expiresIn: 7 * 24 * 60 * 60,
            user: new auth_response_dto_1.UserResponseDto(user),
            message,
        };
    }
    async canCreateCalculation(userId) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            return false;
        }
        return user.canCreateCalculation() && user.isPlanActive();
    }
    async incrementCalculationCount(userId) {
        await this.userRepository.increment({ id: userId }, 'calculationsCount', 1);
    }
    async findUserById(id) {
        return this.userRepository.findOne({
            where: { id },
        });
    }
    async createAdminUser() {
        const existingAdmin = await this.userRepository.findOne({
            where: { email: 'comercial@calientabeauty.com' }
        });
        if (existingAdmin) {
            if (existingAdmin.role !== user_entity_1.UserRole.ADMIN) {
                existingAdmin.role = user_entity_1.UserRole.ADMIN;
                await this.userRepository.save(existingAdmin);
                return {
                    message: 'Usuário existente promovido a administrador',
                    created: false
                };
            }
            return {
                message: 'Usuário administrador já existe',
                created: false
            };
        }
        const saltRounds = 12;
        const passwordHash = await bcrypt.hash('001266', saltRounds);
        const adminUser = this.userRepository.create({
            name: 'Administrador',
            email: 'comercial@calientabeauty.com',
            passwordHash,
            role: user_entity_1.UserRole.ADMIN,
            plan: user_entity_1.UserPlan.PREMIUM,
            status: user_entity_1.UserStatus.ACTIVE,
            currencyDefault: 'BRL',
            country: 'BR',
            calculationsCount: 0,
        });
        await this.userRepository.save(adminUser);
        return {
            message: 'Usuário administrador criado com sucesso! Email: comercial@calientabeauty.com, Senha: 001266',
            created: true
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map