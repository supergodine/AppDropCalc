import { Controller, Post, Body, Headers, HttpCode, HttpStatus, Get, Param, Logger } from '@nestjs/common';
import { MercadoPagoService } from './mercadopago.service';

@Controller('mercadopago')
export class MercadoPagoController {
  private readonly logger = new Logger(MercadoPagoController.name);
  constructor(private readonly mpService: MercadoPagoService) {}

  @Post('webhook')
  @HttpCode(200)
  async webhook(@Body() body: any, @Headers() headers: any) {
    try {
      // Mercado Pago may send notifications with different payloads; try to extract payment id
      this.logger.log(JSON.stringify({ event: 'webhook-received', body, headers }));

      const topic = body.topic || body.type || null;
      // Payment id can be in 'data.id' or 'id' or 'payment_id' depending on notification
      let paymentId = null;
      if (body.data && body.data.id) paymentId = body.data.id;
      if (!paymentId && body.id) paymentId = body.id;
      if (!paymentId && body['resource'] && body['resource'].id) paymentId = body['resource'].id;
      if (!paymentId && body['payment_id']) paymentId = body['payment_id'];

      if (!paymentId) {
        this.logger.warn('No paymentId found in Mercado Pago webhook payload');
        return { ok: false };
      }

      const token = process.env.MP_ACCESS_TOKEN;
      if (!token) {
        this.logger.error('MP_ACCESS_TOKEN not configured');
        return { ok: false };
      }

      const result = await this.mpService.processNotification(paymentId, token);
      if (result.ok) {
        this.logger.log('Processed Mercado Pago notification OK for payment ' + paymentId);
        return { ok: true };
      }

      this.logger.warn('Processing Mercado Pago notification failed: ' + result.reason);
      return { ok: false, reason: result.reason };
    } catch (err) {
      this.logger.error('Webhook handler exception: ' + (err as any).message);
      return { ok: false };
    }
  }

  @Get('status/:paymentId')
  async status(@Param('paymentId') paymentId: string) {
    try {
      const token = process.env.MP_ACCESS_TOKEN;
      if (!token) return { error: 'mp token missing' };
      const payment = await this.mpService.verifyPayment(paymentId, token);
      return payment;
    } catch (err) {
      this.logger.error('Status error: ' + (err as any).message);
      return { error: 'failed' };
    }
  }
}
