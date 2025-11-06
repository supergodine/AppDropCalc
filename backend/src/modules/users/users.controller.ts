import { Controller, Get, UseGuards, Request, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController {
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

  @Get('list')
  @ApiOperation({ summary: 'Listar todos os usuários (admin)' })
  async getAllUsers() {
    return this.usersService.findAll();
  }
}