import { Controller, Post, Body, Logger } from '@nestjs/common';

// O app define um prefixo global 'api' em `main.ts`, portanto aqui usamos apenas 'auth'
@Controller('auth')
export class ForgotStubController {
  private readonly logger = new Logger(ForgotStubController.name);

  @Post('forgot-password')
  async forgot(@Body() body: { email: string }) {
    // Este stub apenas registra o pedido e responde com sucesso.
    this.logger.log(`[STUB] forgot-password request for email=${body?.email}`);
    return { ok: true, message: 'Email de recuperação (stub) enviado com sucesso (modo dev).' };
  }
}
