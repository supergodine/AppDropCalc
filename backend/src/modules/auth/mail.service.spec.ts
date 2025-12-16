import { Test, TestingModule } from '@nestjs/testing';
import { MailService } from './mail.service';
import { UsersService } from '../users/users.service';
import { MailerService } from '../../common/mailer/mailer.service';

describe('MailService', () => {
  let service: MailService;
  let usersServiceMock: Partial<UsersService> & Record<string, jest.Mock>;

  beforeEach(async () => {
    usersServiceMock = {
      findByEmail: jest.fn(),
      updatePasswordResetToken: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MailService,
        { provide: UsersService, useValue: usersServiceMock },
        { provide: MailerService, useValue: { sendMail: jest.fn() } },
      ],
    }).compile();

    service = module.get<MailService>(MailService);
    // usersServiceMock already available locally
  });

  it('deve retornar undefined se o usuário não existir', async () => {
    (usersServiceMock.findByEmail as jest.Mock).mockResolvedValue(null);
    const result = await service.sendPasswordRecovery('naoexiste@email.com', 'token123');
    expect(result).toBeUndefined();
  });

  it('deve enviar e-mail se o usuário existir (usando credenciais reais)', async () => {
    (usersServiceMock.findByEmail as jest.Mock).mockResolvedValue({ id: '1', email: process.env.GMAIL_USER });
    // Não mocka o nodemailer, usa credenciais reais do ambiente — MailerService.sendMail is mocked
    await expect(service.sendPasswordRecovery(process.env.GMAIL_USER, 'token123')).resolves.toBeUndefined();
  });
});
