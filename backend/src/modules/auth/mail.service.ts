import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
// Removido SendGrid. Serviço migrado para src/common/mailer/mailer.service.ts

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

    // Removido. Use MailerService via SMTP.
  }
}
