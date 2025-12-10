import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { [REDACTED_MERCADOPAGO_TOKEN] } from './mercadopago.controller';
import { [REDACTED_MERCADOPAGO_TOKEN] } from './mercadopago.service';

@Module({
  imports: [UsersModule],
  controllers: [[REDACTED_MERCADOPAGO_TOKEN]],
  providers: [[REDACTED_MERCADOPAGO_TOKEN]],
  exports: [[REDACTED_MERCADOPAGO_TOKEN]],
})
export class [REDACTED_MERCADOPAGO_TOKEN] {}
