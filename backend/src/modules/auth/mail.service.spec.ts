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

  it('deve lançar NotFoundException se o usuário não existir', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(null);
    await expect(service.sendPasswordRecovery('naoexiste@email.com', 'token123')).rejects.toThrow('Usuário não encontrado');
  });

  it('deve enviar e-mail se o usuário existir', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue({ email: 'existe@email.com' } as User);
    const sendMailMock = jest.fn();
    jest.mock('nodemailer', () => ({
      createTransport: () => ({ sendMail: sendMailMock })
    }));
    await service.sendPasswordRecovery('existe@email.com', 'token123');
    expect(sendMailMock).toHaveBeenCalled();
  });
});
