import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;
  private readonly logger = new Logger(MailerService.name);

  constructor() {
    const {
      HOSTINGER_SMTP_HOST,
      HOSTINGER_SMTP_PORT,
      HOSTINGER_SMTP_SECURE,
      HOSTINGER_SMTP_USER,
      HOSTINGER_SMTP_PASS,
    } = process.env;

    this.logger.log(`SMTP ENV HOST: ${HOSTINGER_SMTP_HOST}`);
    this.logger.log(`SMTP ENV PORT: ${HOSTINGER_SMTP_PORT}`);
    this.logger.log(`SMTP ENV SECURE: ${HOSTINGER_SMTP_SECURE}`);
    this.logger.log(`SMTP ENV USER: ${HOSTINGER_SMTP_USER}`);
    // Não logar senha em produção

    if (
      !HOSTINGER_SMTP_HOST ||
      !HOSTINGER_SMTP_PORT ||
      !HOSTINGER_SMTP_USER ||
      !HOSTINGER_SMTP_PASS
    ) {
      this.logger.error('SMTP config missing in environment variables');
      return;
    }

    this.logger.log(`Configurando transporter: host=${HOSTINGER_SMTP_HOST}, port=${HOSTINGER_SMTP_PORT}, secure=${HOSTINGER_SMTP_SECURE}`);

    this.transporter = nodemailer.createTransport({
      host: HOSTINGER_SMTP_HOST,
      port: Number(HOSTINGER_SMTP_PORT),
      secure: HOSTINGER_SMTP_SECURE === 'true', // true para 465, false para 587
      auth: {
        user: HOSTINGER_SMTP_USER,
        pass: HOSTINGER_SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendMail({ to, subject, html, text }) {
    if (!this.transporter) {
      this.logger.error('SMTP transporter not initialized');
      throw new Error('SMTP transporter not initialized');
    }

    const from = process.env.MAIL_FROM || 'Equipe DropCalc <suporte@procuracerta.com>';

    try {
      this.logger.log(`[MailerService] Enviando e-mail para: ${to}`);
      this.logger.log(`[MailerService] Assunto: ${subject}`);
      this.logger.log(`[MailerService] Conteúdo: ${html ? '[HTML]' : '[TEXT]'} (não exibido por segurança)`);
      const info = await this.transporter.sendMail({
        from,
        to,
        subject,
        html,
        text,
      });
      this.logger.log(`[MailerService] E-mail enviado com sucesso! messageId: ${info.messageId}`);
      return info;
    } catch (err) {
      this.logger.error(`[MailerService] Falha ao enviar e-mail: ${err.message}`);
      this.logger.error(`[MailerService] Erro completo:`, err);
      if (err.response) {
        this.logger.error(`[MailerService] Resposta do servidor SMTP:`, err.response);
      }
      throw err;
    }
  }
}
