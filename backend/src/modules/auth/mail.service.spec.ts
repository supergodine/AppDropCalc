import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MailService } from './mail.service';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';

describe('MailService', () => {
  let service: MailService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MailService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MailService>(MailService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('deve retornar undefined se o usuário não existir', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(null);
    const result = await service.sendPasswordRecovery('naoexiste@email.com', 'token123');
    expect(result).toBeUndefined();
  });

  it('deve enviar e-mail se o usuário existir (usando credenciais reais)', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue({ email: process.env.GMAIL_USER } as User);
    // Não mocka o nodemailer, usa credenciais reais do ambiente
    await expect(service.sendPasswordRecovery(process.env.GMAIL_USER, 'token123')).resolves.toBeUndefined();
  });
});
