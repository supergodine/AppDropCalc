import { Controller, Post, Body, UseGuards, Request, Get, Param, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PaymentsService } from './payments.service';
import { UsersService } from '../users/users.service';

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

  // Admin: list payments by status (e.g., refunded)
  @UseGuards(AuthGuard('jwt'))
  @Get('admin/list')
  async adminList(@Request() req) {
    // check admin
    const callerId = req.user?.sub || req.user?.id || null;
    if (!callerId) throw new UnauthorizedException('Missing user id');
    const callingUser = await this.usersService.findById(callerId);
    if (!callingUser || !callingUser.isAdmin()) throw new ForbiddenException('Admin required');

    const status = req.query.status || 'refunded';
    return this.paymentsService.findByStatus(String(status));
  }

  // Admin: downgrade the user related to a payment (by payment id)
  @UseGuards(AuthGuard('jwt'))
  @Post('admin/downgrade-by-payment/:paymentId')
  async adminDowngradeByPayment(@Request() req, @Param('paymentId') paymentId: string) {
    const callerId = req.user?.sub || req.user?.id || null;
    if (!callerId) throw new UnauthorizedException('Missing user id');
    const callingUser = await this.usersService.findById(callerId);
    if (!callingUser || !callingUser.isAdmin()) throw new ForbiddenException('Admin required');

    const payment = await this.paymentsService.findById(paymentId);
    if (!payment) throw new UnauthorizedException('Payment not found');
    // externalReference format: <plan>_<userId>
    const parts = (payment.externalReference || '').split('_');
    if (parts.length < 2) throw new UnauthorizedException('Invalid external reference');
    const userId = parts.slice(1).join('_');
    const downgraded = await this.usersService.downgradeToBasic(userId);
    if (!downgraded) throw new UnauthorizedException('User not found for downgrade');
    return { ok: true, userId: downgraded.id };
  }
}
