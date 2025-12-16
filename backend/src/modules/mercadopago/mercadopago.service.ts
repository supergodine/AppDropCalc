import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { UsersService } from '../users/users.service';
import { PaymentsService } from '../payments/payments.service';

const MP_BASE = 'https://api.mercadopago.com';

@Injectable()
export class MercadoPagoService {
  private readonly logger = new Logger(MercadoPagoService.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly paymentsService: PaymentsService,
  ) {}

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

      this.logger.log(JSON.stringify({ action: 'processNotification', paymentId, status: payment.status, external_reference: payment.external_reference || (payment.order && payment.order.external_reference) }));

      // Extra debug logging to help trace why users aren't being updated
      this.logger.log('Payment raw object snippet: ' + JSON.stringify({ id: payment.id, status: payment.status, external_reference: payment.external_reference || null, order: payment.order ? { external_reference: payment.order.external_reference } : null }));

      if (!payment || !payment.status) {
        return { ok: false, reason: 'no-payment-data' };
      }

      // We'll normalize status and handle multiple flows (approved, refunded/chargeback, rejected/cancelled)

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

      // find local payment record
      const localPayment = await this.paymentsService.findByExternalReference(external);
      this.logger.log('Resolved external reference parts: ' + JSON.stringify({ planId, userId, external }));
      this.logger.log('Local payment lookup result: ' + (localPayment ? JSON.stringify({ id: localPayment.id, status: localPayment.status, userId: localPayment.userId }) : 'null'));

      // Determine period - try to read from metadata or items description
      let period = 'monthly';
      try {
        if (payment.metadata && payment.metadata.period) period = payment.metadata.period;
      } catch (err) {}

      const status = String(payment.status).toLowerCase();

      if (status === 'approved') {
        // idempotent: if local payment exists and already approved, skip
        if (localPayment && localPayment.status === 'approved') {
          this.logger.log('Payment already approved locally: ' + (localPayment.id || 'unknown'));
          return { ok: true };
        }

        // mark approved in local DB if exists
        if (localPayment) {
          const marked = await this.paymentsService.markApproved(localPayment.id, payment.id, payment);
          this.logger.log('markApproved result: ' + (marked ? JSON.stringify({ id: marked.id, status: marked.status }) : 'null'));
        }

        const updated = await this.usersService.updatePlan(userId, planId, period);
        this.logger.log('usersService.updatePlan returned: ' + (updated ? JSON.stringify({ id: updated.id, plan: updated.plan, planExpiresAt: updated.planExpiresAt }) : 'null'));
        if (!updated) {
          return { ok: false, reason: 'user-not-found' };
        }

        this.logger.log(JSON.stringify({ action: 'plan-updated', userId, planId, period }));
        return { ok: true };
      }

      // handle refunded/chargeback/cancelled/rejected
      if (['refunded', 'charged_back', 'cancelled', 'rejected'].includes(status)) {
        if (localPayment) {
          // mark payment refunded or rejected appropriately
          if (['refunded', 'charged_back'].includes(status)) {
            await this.paymentsService.markRefunded(localPayment.id, payment);
          } else {
            await this.paymentsService.markRejected(localPayment.id, payment);
          }
        }

        // Manual policy chosen: do NOT change user's plan automatically.
        // Log the event so admins can take action manually (via DB or admin endpoint).
        this.logger.log(`Payment ${paymentId} has status ${status}; marked local payment accordingly. Manual admin action required to change user plan.`);

        return { ok: true, reason: `handled-${status}` };
      }

      return { ok: false, reason: `status-${payment.status}` };
    } catch (err: any) {
      this.logger.error('processNotification error: ' + (err?.message || err));
      return { ok: false, reason: 'exception' };
    }
  }
}
