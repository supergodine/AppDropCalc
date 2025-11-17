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
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // Configure o transporter (exemplo: Gmail, SMTP, etc)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recoveryUrl = `${process.env.FRONTEND_URL || 'https://app-drop-calc-matcqzw7v.vercel.app'}/reset-password?token=${token}`;

    await transporter.sendMail({
      from: `DropCalc <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Recuperação de senha - DropCalc',
      html: `<p>Olá,</p><p>Recebemos uma solicitação para redefinir sua senha. Clique no link abaixo para continuar:</p><p><a href="${recoveryUrl}">${recoveryUrl}</a></p><p>Se você não solicitou, ignore este e-mail.</p>`
    });
  }
}
