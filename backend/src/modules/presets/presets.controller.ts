import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { PresetsService } from './presets.service';

@ApiTags('presets')
@Controller('presets')
export class PresetsController {
  constructor(private readonly presetsService: PresetsService) {}

  @Get('platforms')
  @ApiOperation({ summary: 'Listar presets de plataformas' })
  @ApiQuery({ name: 'country', required: false, description: 'Filtrar por país (ISO 3166-1 alpha-2)' })
  async getPlatforms(@Query('country') country?: string) {
    return this.presetsService.findAllPlatforms(country);
  }

  @Get('gateways')
  @ApiOperation({ summary: 'Listar presets de gateways de pagamento' })
  @ApiQuery({ name: 'country', required: false, description: 'Filtrar por país' })
  @ApiQuery({ name: 'currency', required: false, description: 'Filtrar por moeda' })
  async getGateways(
    @Query('country') country?: string,
    @Query('currency') currency?: string,
  ) {
    return this.presetsService.findAllGateways(country, currency);
  }

  @Get('platforms/popular')
  @ApiOperation({ summary: 'Plataformas mais utilizadas' })
  @ApiQuery({ name: 'limit', required: false, description: 'Número de resultados (padrão: 5)' })
  async getPopularPlatforms(@Query('limit') limit = 5) {
    return this.presetsService.getPopularPlatforms(Number(limit));
  }

  @Get('gateways/popular')
  @ApiOperation({ summary: 'Gateways mais utilizados' })
  @ApiQuery({ name: 'limit', required: false, description: 'Número de resultados (padrão: 5)' })
  async getPopularGateways(@Query('limit') limit = 5) {
    return this.presetsService.getPopularGateways(Number(limit));
  }

  @Get('platforms/search')
  @ApiOperation({ summary: 'Buscar plataformas por nome' })
  @ApiQuery({ name: 'q', description: 'Termo de busca' })
  async searchPlatforms(@Query('q') query: string) {
    return this.presetsService.searchPlatforms(query);
  }

  @Get('gateways/search')
  @ApiOperation({ summary: 'Buscar gateways por nome' })
  @ApiQuery({ name: 'q', description: 'Termo de busca' })
  async searchGateways(@Query('q') query: string) {
    return this.presetsService.searchGateways(query);
  }
}