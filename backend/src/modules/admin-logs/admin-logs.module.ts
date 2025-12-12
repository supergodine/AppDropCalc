import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminLog } from './admin-log.entity';
import { AdminLogsService } from './admin-logs.service';
import { AdminLogsController } from './admin-logs.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([AdminLog]), forwardRef(() => UsersModule)],
  providers: [AdminLogsService],
  controllers: [AdminLogsController],
  exports: [AdminLogsService],
})
export class AdminLogsModule {}
