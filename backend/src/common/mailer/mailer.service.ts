import { Injectable, Logger } from '@nestjs/common';
import Mailjet from 'node-mailjet';
import * as nodemailer from 'nodemailer';

type MailPayload = {
  to: string;
  subject: string;
  html?: string;
  text?: string;
};

@Injectable()
export class MailerService {
  private client: any | null = null; // Mailjet client
  private transporter: any | null = null; // nodemailer transporter
  private mode: 'mailjet' | 'smtp' | null = null;
  private readonly logger = new Logger(MailerService.name);

  constructor() {
    const { MAILJET_API_KEY, MAILJET_SECRET_KEY, MAILJET_SENDER_EMAIL, HOSTINGER_SMTP_HOST, HOSTINGER_SMTP_PORT, HOSTINGER_SMTP_SECURE, HOSTINGER_SMTP_USER, HOSTINGER_SMTP_PASS } = process.env;

    // Prefer Mailjet when configured
    if (MAILJET_API_KEY && MAILJET_SECRET_KEY && MAILJET_SENDER_EMAIL) {
      try {
        this.client = Mailjet.apiConnect(MAILJET_API_KEY, MAILJET_SECRET_KEY);
        this.mode = 'mailjet';
        this.logger.log('USANDO MAILER: Mailjet (API)');
        this.logger.log(`Mailjet sender present: ${!!MAILJET_SENDER_EMAIL}`);
      } catch (err) {
        this.logger.error('Falha ao inicializar Mailjet client', err?.message || err);
        this.client = null;
      }
    }

    // If Mailjet not configured or failed, try SMTP fallback
    if (!this.client && HOSTINGER_SMTP_HOST && HOSTINGER_SMTP_PORT && HOSTINGER_SMTP_USER && HOSTINGER_SMTP_PASS) {
      try {
        this.transporter = nodemailer.createTransport({
          host: HOSTINGER_SMTP_HOST,
          port: Number(HOSTINGER_SMTP_PORT),
          secure: String(HOSTINGER_SMTP_SECURE) === 'true',
          auth: {
            user: HOSTINGER_SMTP_USER,
            pass: HOSTINGER_SMTP_PASS,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });
        this.mode = 'smtp';
        this.logger.log('USANDO MAILER: SMTP (Hostinger)');
        this.logger.log(`SMTP ENV HOST: ${HOSTINGER_SMTP_HOST}`);
      } catch (err) {
        this.logger.error('Falha ao inicializar SMTP transporter', err?.message || err);
        this.transporter = null;
      }
    }

    if (!this.client && !this.transporter) {
      this.logger.error('Nenhum provedor de e-mail configurado (Mailjet ou SMTP)');
    }
  }

  async sendMail({ to, subject, html, text }: MailPayload) {
    if (this.mode === 'mailjet' && this.client) {
      const sender = process.env.MAILJET_SENDER_EMAIL;
      if (!sender) {
        this.logger.error('MAILJET_SENDER_EMAIL not configured');
        throw new Error('MAILJET_SENDER_EMAIL not configured');
      }

      try {
        this.logger.log(`[MailerService] Enviando e-mail Mailjet para: ${to}`);
        const requestBody = {
          Messages: [
            {
              From: { Email: sender },
              To: [{ Email: to }],
              Subject: subject,
              HTMLPart: html,
              TextPart: text || undefined,
            },
          ],
        };

        const res = await this.client.post('send', { version: 'v3.1' }).request(requestBody);
        this.logger.log(`[MailerService] Mailjet enviado com status: ${res?.status}`);
        return res.body;
      } catch (err) {
        this.logger.error(`[MailerService] Falha ao enviar Mailjet: ${err?.message || err}`);
        this.logger.debug(err);
        throw err;
      }
    }

    if (this.mode === 'smtp' && this.transporter) {
      const from = process.env.MAIL_FROM || process.env.HOSTINGER_SMTP_USER || 'no-reply@example.com';
      try {
        this.logger.log(`[MailerService] Enviando e-mail via SMTP para: ${to}`);
        const info = await this.transporter.sendMail({ from, to, subject, html, text });
        this.logger.log(`[MailerService] SMTP enviado: ${info?.messageId || 'ok'}`);
        return info;
      } catch (err) {
        this.logger.error(`[MailerService] Falha ao enviar e-mail: ${err?.message || err}`);
        this.logger.debug(err);
        throw err;
      }
    }

    this.logger.error('Nenhum método de envio disponível');
    throw new Error('Nenhum método de envio disponível');
  }
}
