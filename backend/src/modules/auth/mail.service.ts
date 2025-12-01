import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import * as nodemailer from 'nodemailer';

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
    user.passwordresettoken = token;
    user.passwordresetexpires = new Date(Date.now() + 60 * 60 * 1000);
    await this.userRepository.save(user);

    // Configure o transporter (exemplo: Gmail, SMTP, etc)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const recoveryUrl = `${process.env.FRONTEND_URL || 'https://app-drop-calc.vercel.app'}/reset-password?token=${token}`;
    console.log(`[MailService] Enviando e-mail de recuperação para: ${email} com link: ${recoveryUrl}`);

    await transporter.sendMail({
      from: `DropCalc <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Recuperação de senha - DropCalc',
      html: `<p>Olá,</p><p>Recebemos uma solicitação para redefinir sua senha. Clique no link abaixo para continuar:</p><p><a href="${recoveryUrl}">${recoveryUrl}</a></p><p>Se você não solicitou, ignore este e-mail.</p>`
    });
    console.log(`[MailService] E-mail enviado para: ${email}`);
  }
}
