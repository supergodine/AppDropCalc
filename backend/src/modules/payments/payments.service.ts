import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);

  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async createPending(userId: string, planId: string, amount: number, externalReference: string): Promise<Payment> {
    if (!userId) {
      this.logger.error('createPending called with null/undefined userId');
      throw new UnauthorizedException('Invalid user id');
    }

    const payment = this.paymentRepository.create({
      userId,
      planId,
      amount,
      externalReference,
      status: 'pending',
    } as Partial<Payment>);
    return this.paymentRepository.save(payment);
  }

  async markApproved(paymentId: string, mpPaymentId: string, payload: any): Promise<Payment | null> {
    const payment = await this.paymentRepository.findOne({ where: { id: paymentId } });
    if (!payment) return null;
    if (payment.status === 'approved') return payment; // idempotent
    payment.status = 'approved';
    payment.mpPaymentId = mpPaymentId;
    payment.rawPayload = payload;
    await this.paymentRepository.save(payment);
    return payment;
  }

  async markRejected(paymentId: string, payload: any): Promise<Payment | null> {
    const payment = await this.paymentRepository.findOne({ where: { id: paymentId } });
    if (!payment) return null;
    if (payment.status === 'approved') return payment; // do not override approved
    payment.status = 'rejected';
    payment.rawPayload = payload;
    await this.paymentRepository.save(payment);
    return payment;
  }

  async findByExternalReference(externalReference: string): Promise<Payment | null> {
    return this.paymentRepository.findOne({ where: { externalReference } });
  }
}
