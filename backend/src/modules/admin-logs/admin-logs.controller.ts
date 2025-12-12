import { Controller, UseGuards, Get, Request, Query, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminLogsService } from './admin-logs.service';
import { UsersService } from '../users/users.service';

@Controller('admin-logs')
export class AdminLogsController {
  constructor(private readonly adminLogsService: AdminLogsService, private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async list(@Request() req, @Query() query) {
    const callerId = req.user?.sub || req.user?.id || null;
    if (!callerId) throw new UnauthorizedException('Missing user id');
    const callingUser = await this.usersService.findById(callerId);
    if (!callingUser || !callingUser.isAdmin()) throw new ForbiddenException('Admin required');

    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 25;
    const action = query.action || undefined;
    const adminId = query.adminId || undefined;
    const startDate = query.startDate || undefined;
    const endDate = query.endDate || undefined;

    return this.adminLogsService.findAll({ page, limit, action, adminId, startDate, endDate });
  }
}
