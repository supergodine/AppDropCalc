import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CalculationsService } from './calculations.service';
import { CreateCalculationDto } from './dto/create-calculation.dto';

@ApiTags('calculations')
@Controller('calculations')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CalculationsController {
  constructor(private readonly calculationsService: CalculationsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ 
    summary: 'Criar novo cálculo de precificação',
    description: 'Calcula preço de venda automaticamente com base nos parâmetros fornecidos'
  })
  @ApiResponse({
    status: 201,
    description: 'Cálculo criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos ou erro na API de câmbio',
  })
  @ApiResponse({
    status: 403,
    description: 'Limite de cálculos atingido para plano gratuito',
  })
  async create(
    @Request() req,
    @Body() createCalculationDto: CreateCalculationDto,
  ) {
    return this.calculationsService.create(req.user.id, createCalculationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar cálculos do usuário' })
  @ApiQuery({ name: 'page', required: false, description: 'Página (padrão: 1)' })
  @ApiQuery({ name: 'limit', required: false, description: 'Itens por página (padrão: 20)' })
  @ApiQuery({ name: 'search', required: false, description: 'Buscar por nome do produto' })
  @ApiQuery({ name: 'category', required: false, description: 'Filtrar por categoria' })
  @ApiQuery({ name: 'favorite', required: false, description: 'Apenas favoritos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de cálculos',
  })
  async findAll(
    @Request() req,
    @Query('page') page = 1,
    @Query('limit') limit = 20,
    @Query('search') search?: string,
    @Query('category') category?: string,
    @Query('favorite') favorite?: boolean,
  ) {
    return this.calculationsService.findAll(req.user.id, {
      page,
      limit,
      search,
      category,
      favorite,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter cálculo específico' })
  @ApiResponse({
    status: 200,
    description: 'Detalhes do cálculo',
  })
  @ApiResponse({
    status: 404,
    description: 'Cálculo não encontrado',
  })
  async findOne(
    @Request() req,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.calculationsService.findOne(req.user.id, id);
  }

  @Post(':id/simulate')
  @ApiOperation({ 
    summary: 'Simular diferentes cenários de precificação',
    description: 'Gera cenários conservador, balanceado e agressivo'
  })
  @ApiResponse({
    status: 200,
    description: 'Simulações geradas',
  })
  async simulate(
    @Request() req,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.calculationsService.simulate(req.user.id, id);
  }

  @Post(':id/favorite')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Marcar/desmarcar como favorito' })
  async toggleFavorite(
    @Request() req,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.calculationsService.toggleFavorite(req.user.id, id);
  }

  @Post(':id/archive')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Arquivar/desarquivar cálculo' })
  async toggleArchive(
    @Request() req,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.calculationsService.toggleArchive(req.user.id, id);
  }

  @Get('stats/summary')
  @ApiOperation({ summary: 'Estatísticas dos cálculos do usuário' })
  @ApiResponse({
    status: 200,
    description: 'Resumo estatístico',
  })
  async getStats(@Request() req) {
    return this.calculationsService.getStats(req.user.id);
  }

  @Post('quick-calc')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Cálculo rápido sem salvar',
    description: 'Para testes rápidos, apenas retorna o resultado sem persistir'
  })
  async quickCalculation(
    @Request() req,
    @Body() createCalculationDto: CreateCalculationDto,
  ) {
    return this.calculationsService.quickCalculation(req.user.id, createCalculationDto);
  }
}