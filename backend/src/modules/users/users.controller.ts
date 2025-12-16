import { Controller, Get, UseGuards, Request, NotFoundException, Post, ForbiddenException } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { AdminLogsService } from '../admin-logs/admin-logs.service';

@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController {
  @Get('create-admin')
  @ApiOperation({ summary: 'Criar usuário admin Diego (temporário)' })
  async createAdminUser() {
    const user = await this.usersService.createAdminUser();
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      plan: user.plan,
      role: user.role,
      status: user.status,
    };
  }
  constructor(private readonly usersService: UsersService, private readonly adminLogsService: AdminLogsService) {}

  @Get('profile')
  @ApiOperation({ summary: 'Obter perfil completo do usuário' })
  async getProfile(@Request() req) {
    const user = await this.usersService.findById(req.user.sub);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  @Get('me')
  @ApiOperation({ summary: 'Obter plano/assinatura atual do usuário' })
  async getMyPlan(@Request() req) {
    const user = await this.usersService.findById(req.user.sub);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    // If admin requested this endpoint as a token validation, record it
    try {
      if (user && user.isAdmin && user.isAdmin()) {
        // record that an admin validated their token / queried own plan
        await this.adminLogsService.record(user.id, 'validate_token', { metadata: { endpoint: 'users/me' } });
      }
    } catch (e) {
      // ignore logging errors
    }
    return {
      planId: user.plan,
      subscriptionStatus: user.subscriptionStatus || 'inactive',
      subscriptionPeriod: user.subscriptionPeriod || null,
      planExpiresAt: user.planExpiresAt || null,
    };
  }

  @Post('admin/process-past-due')
  @ApiOperation({ summary: 'Process pending past_due downgrades (admin only)' })
  async processPastDue(@Request() req) {
    const calling = await this.usersService.findById(req.user.sub);
    if (!calling || !calling.isAdmin()) {
      throw new ForbiddenException('Admin access required');
    }
    const result = await this.usersService.processPastDueDowngrades();
    try {
      // record admin action
      const count = (result && (result as any).downgraded) ? (result as any).downgraded.length : 0;
      await this.adminLogsService.record(req.user.sub, 'process_past_due', { metadata: { resultCount: count } });
    } catch (e) {}
    return result;
  }

  @Post('admin/downgrade/:userId')
  @ApiOperation({ summary: 'Admin: downgrade a user immediately to free/basic' })
  async adminDowngrade(@Request() req) {
    const calling = await this.usersService.findById(req.user.sub);
    if (!calling || !calling.isAdmin()) {
      throw new ForbiddenException('Admin access required');
    }
    const userId = req.params.userId;
    const downgraded = await this.usersService.downgradeToBasic(userId);
    if (!downgraded) throw new NotFoundException('User not found');
    try {
      await this.adminLogsService.record(req.user.sub, 'downgrade_user', { targetUserId: userId });
    } catch (e) {}
    return { ok: true, userId: downgraded.id, plan: downgraded.plan };
  }

  @Get('list')
  @ApiOperation({ summary: 'Listar todos os usuários (admin)' })
  async getAllUsers() {
    return this.usersService.findAll();
  }
}