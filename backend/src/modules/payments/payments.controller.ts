import { Controller, Post, Body, UseGuards, Request, Get, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  // Create a pending payment record before sending preference to Mercado Pago
  @UseGuards(JwtAuthGuard)
  @Post('create-pending')
  async createPending(@Request() req, @Body() body: { planId: string; amount: number; externalReference?: string }) {
    const userId = req.user.sub;
    const planId = body.planId;
    const amount = body.amount;
    const external = body.externalReference || `${planId}_${userId}`;
    const payment = await this.paymentsService.createPending(userId, planId, amount, external);
    return { id: payment.id, externalReference: payment.externalReference };
  }

  @UseGuards(JwtAuthGuard)
  @Get('external/:ref')
  async getByExternal(@Param('ref') ref: string) {
    return this.paymentsService.findByExternalReference(ref);
  }
}
