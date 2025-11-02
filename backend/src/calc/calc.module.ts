import { Module } from '@nestjs/common';
import { CalcController, ExchangeController } from './calc.controller';
import { CalcService } from './calc.service';
import { ExchangeService } from '../exchange/exchange.service';

@Module({
  controllers: [CalcController, ExchangeController],
  providers: [CalcService, ExchangeService],
  exports: [CalcService, ExchangeService],
})
export class CalcModule {}