import { Module } from '@nestjs/common';
import { ForgotStubController } from './forgot-stub.controller';

@Module({
  controllers: [ForgotStubController],
})
export class DebugModule {}
