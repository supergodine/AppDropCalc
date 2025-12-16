import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { ResetPasswordDto } from './dto/reset-password.dto';

const mockUser = {
  id: '1',
  email: 'test@example.com',
  passwordHash: '$2b$12$abcdefghijklmnopqrstuv',
  status: 'active',
  passwordresettoken: 'token123',
  passwordresetexpires: new Date(Date.now() + 60 * 60 * 1000),
};

const userRepositoryMock = {
  findOne: jest.fn(),
  save: jest.fn(),
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: getRepositoryToken(User), useValue: userRepositoryMock },
        { provide: JwtService, useValue: {} },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });

  describe('resetPassword', () => {
    it('deve redefinir a senha se o token for válido e não expirado', async () => {
      userRepositoryMock.findOne.mockResolvedValue({ ...mockUser });
      userRepositoryMock.save.mockResolvedValue({ ...mockUser });
      const dto: ResetPasswordDto = {
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
      const dto: ResetPasswordDto = {
        token: 'tokenInvalido',
        newPassword: 'novaSenhaSegura',
      };
      const result = await service.resetPassword(dto);
      expect(result.success).toBe(false);
      expect(result.message).toBe('Token inválido ou expirado');
    });

    it('deve falhar se o token estiver expirado', async () => {
      userRepositoryMock.findOne.mockResolvedValue({ ...mockUser, passwordresetexpires: new Date(Date.now() - 1000) });
      const dto: ResetPasswordDto = {
        token: 'token123',
        newPassword: 'novaSenhaSegura',
      };
      const result = await service.resetPassword(dto);
      expect(result.success).toBe(false);
      expect(result.message).toBe('Token expirado');
    });

    it('deve falhar se a nova senha for muito curta', async () => {
      userRepositoryMock.findOne.mockResolvedValue({ ...mockUser });
      const dto: ResetPasswordDto = {
        token: 'token123',
        newPassword: '123',
      };
      const result = await service.resetPassword(dto);
      expect(result.success).toBe(false);
      expect(result.message).toBe('A senha deve ter pelo menos 8 caracteres');
    });
  });
});
