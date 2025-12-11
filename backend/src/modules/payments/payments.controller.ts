import { Controller, Post, Body, UseGuards, Request, Get, Param, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  // Create a pending payment record before sending preference to Mercado Pago
  @UseGuards(AuthGuard('jwt'))
  @Post('create-pending')
  async createPending(@Request() req, @Body() body: { planId: string; amount: number; externalReference?: string }) {
    console.log('REQ USER:', req.user);
    const userId = req.user?.id;
    if (!userId) throw new UnauthorizedException('Missing user id in request');

    const planId = body.planId;
    const amount = body.amount;
    const external = body.externalReference || `${planId}_${userId}`;
    const payment = await this.paymentsService.createPending(userId, planId, amount, external);
    return { id: payment.id, externalReference: payment.externalReference };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('external/:ref')
  async getByExternal(@Param('ref') ref: string) {
    return this.paymentsService.findByExternalReference(ref);
  }
}
