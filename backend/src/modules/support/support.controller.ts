import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { MailerService } from '../../common/mailer/mailer.service';

class SupportDto {
  nome: string;
  email: string;
  mensagem: string;
}

@Controller('support')
export class SupportController {
  constructor(private readonly mailer: MailerService) {}

  @Post('contact')
  async contact(@Body() body: SupportDto) {
    const { nome, email, mensagem } = body as SupportDto;
    if (!nome || !email || !mensagem) {
      throw new BadRequestException('Missing required fields');
    }

    const to = process.env.MAIL_SUPPORT_TO || process.env.MAILJET_SENDER_EMAIL || process.env.HOSTINGER_SMTP_USER;
    const subject = `Contato - DropCalc: ${nome}`;
    const html = `<p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Mensagem:</strong><br/>${mensagem}</p>`;

    // Use mailer service to send to support address
    const res = await this.mailer.sendMail({ to, subject, html, text: mensagem });
    return { ok: true, result: res };
  }
}
