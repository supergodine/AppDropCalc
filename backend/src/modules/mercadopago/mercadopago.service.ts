import { Injectable, HttpService, Logger } from '@nestjs/common';
import axios from 'axios';
import { UsersService } from '../users/users.service';

const MP_BASE = 'https://api.mercadopago.com';

@Injectable()
export class [REDACTED_MERCADOPAGO_TOKEN] {
  private readonly logger = new Logger([REDACTED_MERCADOPAGO_TOKEN].name);

  constructor(private readonly usersService: UsersService) {}

  async verifyPayment(paymentId: string, accessToken: string): Promise<any> {
    const url = `${MP_BASE}/v1/payments/${paymentId}`;
    this.logger.log(JSON.stringify({ action: 'verifyPayment', paymentId, url }));
    const resp = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return resp.data;
  }

  /**
   * Process an incoming Mercado Pago payment notification.
   * Fetches the payment and if approved updates the user's plan.
   */
  async processNotification(paymentId: string, accessToken: string): Promise<{ ok: boolean; reason?: string }> {
    try {
      const payment = await this.verifyPayment(paymentId, accessToken);

      this.logger.log(JSON.stringify({ action: 'processNotification', paymentId, status: payment.status }));

      if (!payment || !payment.status) {
        return { ok: false, reason: 'no-payment-data' };
      }

      if (payment.status.toLowerCase() !== 'approved') {
        return { ok: false, reason: `status-${payment.status}` };
      }

      // external_reference expected in payment.order or payment.external_reference
      const external = payment.external_reference || (payment.order && payment.order.external_reference) || null;
      if (!external) {
        this.logger.warn('No external_reference found on payment ' + paymentId);
        return { ok: false, reason: 'no-external-reference' };
      }

      // expected format: <planId>_<userId>
      const parts = external.split('_');
      if (parts.length < 2) {
        this.logger.warn('Invalid external_reference format: ' + external);
        return { ok: false, reason: 'invalid-external-format' };
      }

      const planId = parts[0];
      const userId = parts.slice(1).join('_');

      // Determine period - try to read from metadata or items description
      let period = 'monthly';
      try {
        if (payment.metadata && payment.metadata.period) period = payment.metadata.period;
      } catch (err) {}

      const updated = await this.usersService.updatePlan(userId, planId, period);
      if (!updated) {
        return { ok: false, reason: 'user-not-found' };
      }

      this.logger.log(JSON.stringify({ action: 'plan-updated', userId, planId, period }));

      return { ok: true };
    } catch (err: any) {
      this.logger.error('processNotification error: ' + (err?.message || err));
      return { ok: false, reason: 'exception' };
    }
  }
}
