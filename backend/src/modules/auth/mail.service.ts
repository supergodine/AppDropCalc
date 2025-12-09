import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { MailerService } from '../../common/mailer/mailer.service';


@Injectable()
export class MailService {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailerService: MailerService,
  ) {}

  async sendPasswordRecovery(email: string, token: string): Promise<void> {
    console.log(`[MailService] Iniciando recuperação de senha para: ${email}`);
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      console.log(`[MailService] Usuário não encontrado: ${email}`);
      // Por segurança, não lançar erro, apenas logar e retornar
      return;
    }

    // Persistir token e expiração (1 hora)
    await this.usersService.updatePasswordResetToken(user.id, token, new Date(Date.now() + 60 * 60 * 1000));

    const recoveryUrl = `${process.env.FRONTEND_URL || 'https://app-drop-calc.vercel.app'}/reset-password?token=${token}`;

    const html = `<p>Olá,</p><p>Recebemos uma solicitação para redefinir sua senha. Clique no link abaixo para continuar:</p><p><a href="${recoveryUrl}">${recoveryUrl}</a></p><p>Se você não solicitou, ignore este e-mail.</p>`;
    const text = `Olá,\nRecebemos uma solicitação para redefinir sua senha. Acesse: ${recoveryUrl}`;

    // Enviar via MailerService (Mailjet)
    await this.mailerService.sendMail({
      to: email,
      subject: 'Recuperação de senha - DropCalc',
      html,
      text,
    });
  }
}
