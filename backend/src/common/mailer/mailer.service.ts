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

    if (
      !HOSTINGER_SMTP_HOST ||
      !HOSTINGER_SMTP_PORT ||
      !HOSTINGER_SMTP_USER ||
      !HOSTINGER_SMTP_PASS
    ) {
      this.logger.error('SMTP config missing in environment variables');
      return;
    }

    this.transporter = nodemailer.createTransport({
      host: HOSTINGER_SMTP_HOST,
      port: Number(HOSTINGER_SMTP_PORT),
      secure: HOSTINGER_SMTP_SECURE === 'true', // true for 465, false for 587
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

    const from = process.env.MAIL_FROM || 'Equipe Procura Certa <suporte@procuracerta.com>';

    try {
      const info = await this.transporter.sendMail({
        from,
        to,
        subject,
        html,
        text,
      });
      this.logger.log(`E-mail enviado: ${info.messageId}`);
      return info;
    } catch (err) {
      this.logger.error(`Erro ao enviar e-mail: ${err.message}`, err.response);
      throw err;
    }
  }
}
