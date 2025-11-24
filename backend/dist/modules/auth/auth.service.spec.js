"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const auth_service_1 = require("./auth.service");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../users/entities/user.entity");
const mockUser = {
    id: '1',
    email: 'test@example.com',
    passwordHash: '$2b$12$abcdefghijklmnopqrstuv',
    status: 'active',
    passwordResetToken: 'token123',
    passwordResetExpires: new Date(Date.now() + 60 * 60 * 1000),
};
const userRepositoryMock = {
    findOne: jest.fn(),
    save: jest.fn(),
};
describe('AuthService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                auth_service_1.AuthService,
                { provide: (0, typeorm_1.getRepositoryToken)(user_entity_1.User), useValue: userRepositoryMock },
                { provide: jwt_1.JwtService, useValue: {} },
            ],
        }).compile();
        service = module.get(auth_service_1.AuthService);
        jest.clearAllMocks();
    });
    describe('resetPassword', () => {
        it('deve redefinir a senha se o token for válido e não expirado', async () => {
            userRepositoryMock.findOne.mockResolvedValue({ ...mockUser });
            userRepositoryMock.save.mockResolvedValue({ ...mockUser });
            const dto = {
                token: 'token123',
                newPassword: 'novaSenhaSegura',
            };
            const result = await service.resetPassword(dto);
            expect(result.success).toBe(true);
            expect(result.message).toBe('Senha redefinida com sucesso');
            expect(userRepositoryMock.save).toHaveBeenCalled();
        });
        it('deve falhar se o token for inválido', async () => {
            userRepositoryMock.findOne.mockResolvedValue(null);
            const dto = {
                token: 'tokenInvalido',
                newPassword: 'novaSenhaSegura',
            };
            const result = await service.resetPassword(dto);
            expect(result.success).toBe(false);
            expect(result.message).toBe('Token inválido ou expirado');
        });
        it('deve falhar se o token estiver expirado', async () => {
            userRepositoryMock.findOne.mockResolvedValue({ ...mockUser, passwordResetExpires: new Date(Date.now() - 1000) });
            const dto = {
                token: 'token123',
                newPassword: 'novaSenhaSegura',
            };
            const result = await service.resetPassword(dto);
            expect(result.success).toBe(false);
            expect(result.message).toBe('Token expirado');
        });
        it('deve falhar se a nova senha for muito curta', async () => {
            userRepositoryMock.findOne.mockResolvedValue({ ...mockUser });
            const dto = {
                token: 'token123',
                newPassword: '123',
            };
            const result = await service.resetPassword(dto);
            expect(result.success).toBe(false);
            expect(result.message).toBe('A senha deve ter pelo menos 8 caracteres');
        });
    });
});
//# sourceMappingURL=auth.service.spec.js.map