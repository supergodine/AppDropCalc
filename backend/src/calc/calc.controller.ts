import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CalcService, CalculationDto } from './calc.service';
import { ExchangeService } from '../exchange/exchange.service';

@Controller('calc')
export class CalcController {
  constructor(private readonly calcService: CalcService) {}

  @Post('calcular')
  async calcular(@Body() dados: CalculationDto) {
    return await this.calcService.calcularPrecoIdeal(dados);
  }

  @Get('platforms')
  getPlatforms() {
    return this.calcService.getPlatforms();
  }

  @Get('gateways')
  getGateways() {
    return this.calcService.getGateways();
  }
}

@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Get('currencies')
  async getCurrencies() {
    return await this.exchangeService.getSupportedCurrencies();
  }

  @Get('rate/:from/:to')
  async getExchangeRate(@Param('from') from: string, @Param('to') to: string) {
    const rate = await this.exchangeService.getCurrentRate(from, to);
    return { from, to, rate, timestamp: new Date().toISOString() };
  }
}