import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { ExchangeService } from './exchange.service';

@ApiTags('exchange')
@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Get('rate')
  @ApiOperation({ summary: 'Obter taxa de câmbio entre duas moedas' })
  @ApiQuery({ name: 'from', description: 'Moeda de origem', example: 'USD' })
  @ApiQuery({ name: 'to', description: 'Moeda de destino', example: 'BRL' })
  async getRate(@Query('from') from: string, @Query('to') to: string) {
    const rate = await this.exchangeService.getExchangeRate(from, to);
    return {
      from,
      to,
      rate,
      timestamp: new Date().toISOString(),
    };
  }

  @Get('currencies')
  @ApiOperation({ summary: 'Listar moedas suportadas' })
  getSupportedCurrencies() {
    return {
      currencies: this.exchangeService.getSupportedCurrencies(),
      message: 'Moedas suportadas carregadas',
    };
  }

  @Get('multiple')
  @ApiOperation({ summary: 'Obter múltiplas taxas de câmbio' })
  @ApiQuery({ name: 'base', description: 'Moeda base', example: 'USD' })
  @ApiQuery({ name: 'targets', description: 'Moedas de destino (separadas por vírgula)', example: 'BRL,EUR,ARS' })
  async getMultipleRates(
    @Query('base') base: string,
    @Query('targets') targets: string,
  ) {
    const targetArray = targets.split(',').map(t => t.trim());
    const rates = await this.exchangeService.getMultipleRates(base, targetArray);
    
    return {
      base,
      rates,
      timestamp: new Date().toISOString(),
    };
  }
}