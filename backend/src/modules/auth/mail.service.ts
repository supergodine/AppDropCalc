import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class MailService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async sendPasswordRecovery(email: string, token: string): Promise<void> {
    console.log(`[MailService] Iniciando recuperação de senha para: ${email}`);
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      console.log(`[MailService] Usuário não encontrado: ${email}`);
      // Por segurança, não lançar erro, apenas logar e retornar
      return;
    }

    // Persistir token e expiração (1 hora)
    user.passwordResetToken = token;
    user.passwordResetExpires = new Date(Date.now() + 60 * 60 * 1000);
    await this.userRepository.save(user);

    // Configurar SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const recoveryUrl = `${process.env.FRONTEND_URL || 'https://app-drop-calc.vercel.app'}/reset-password?token=${token}`;
    console.log(`[MailService] Enviando e-mail de recuperação para: ${email} com link: ${recoveryUrl}`);

    const msg = {
      to: email,
      from: process.env.FROM_EMAIL || 'noreply@dropcalc.app',
      subject: 'Recuperação de senha - DropCalc',
      html: `<p>Olá,</p><p>Recebemos uma solicitação para redefinir sua senha. Clique no link abaixo para continuar:</p><p><a href="${recoveryUrl}">${recoveryUrl}</a></p><p>Se você não solicitou, ignore este e-mail.</p>`
    };
    await sgMail.send(msg);
    console.log(`[MailService] E-mail enviado para: ${email}`);
  }
}
