import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { MercadoPagoController } from './mercadopago.controller';
import { MercadoPagoService } from './mercadopago.service';

@Module({
  imports: [UsersModule],
  controllers: [MercadoPagoController],
  providers: [MercadoPagoService],
  exports: [MercadoPagoService],
})
export class MercadoPagoModule {}
