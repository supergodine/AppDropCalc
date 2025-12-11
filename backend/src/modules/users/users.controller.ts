import { Controller, Get, UseGuards, Request, NotFoundException, Post, ForbiddenException } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

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
  constructor(private readonly usersService: UsersService) {}

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
    return result;
  }

  @Get('list')
  @ApiOperation({ summary: 'Listar todos os usuários (admin)' })
  async getAllUsers() {
    return this.usersService.findAll();
  }
}