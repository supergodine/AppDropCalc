import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AdminLogsModule } from '../admin-logs/admin-logs.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AdminLogsModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}