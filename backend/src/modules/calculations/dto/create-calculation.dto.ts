import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  Min,
  Max,
  IsArray,
  IsUUID,
  IsIn,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class DimensionsDto {
  @ApiProperty({ description: 'Comprimento', example: 15 })
  @IsNumber()
  @Min(0)
  length: number;

  @ApiProperty({ description: 'Largura', example: 8 })
  @IsNumber()
  @Min(0)
  width: number;

  @ApiProperty({ description: 'Altura', example: 2 })
  @IsNumber()
  @Min(0)
  height: number;

  @ApiProperty({ 
    description: 'Unidade de medida', 
    example: 'cm',
    enum: ['cm', 'in'] 
  })
  @IsString()
  @IsIn(['cm', 'in'])
  unit: 'cm' | 'in';
}

export class CreateCalculationDto {
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Smartphone XYZ',
    maxLength: 255,
  })
  @IsString({ message: 'Nome do produto deve ser uma string' })
  productName: string;

  @ApiProperty({
    description: 'Preço do fornecedor',
    example: 150.00,
    minimum: 0.01,
  })
  @IsNumber({}, { message: 'Preço do fornecedor deve ser um número' })
  @Min(0.01, { message: 'Preço do fornecedor deve ser maior que zero' })
  supplierPrice: number;

  @ApiProperty({
    description: 'Moeda do fornecedor',
    example: 'USD',
    enum: ['USD', 'EUR', 'BRL', 'ARS', 'CLP', 'COP', 'MXN'],
  })
  @IsString()
  @IsIn(['USD', 'EUR', 'BRL', 'ARS', 'CLP', 'COP', 'MXN'])
  supplierCurrency: string;

  @ApiProperty({
    description: 'Moeda de venda',
    example: 'BRL',
    enum: ['USD', 'EUR', 'BRL', 'ARS', 'CLP', 'COP', 'MXN'],
  })
  @IsString()
  @IsIn(['USD', 'EUR', 'BRL', 'ARS', 'CLP', 'COP', 'MXN'])
  sellCurrency: string;

  @ApiProperty({
    description: 'Custo de frete',
    example: 25.00,
    required: false,
    default: 0,
  })
  @IsOptional()
  @IsNumber({}, { message: 'Frete deve ser um número' })
  @Min(0, { message: 'Frete não pode ser negativo' })
  freight?: number = 0;

  @ApiProperty({
    description: 'Custo fixo por unidade (embalagem, etc)',
    example: 5.00,
    required: false,
    default: 0,
  })
  @IsOptional()
  @IsNumber({}, { message: 'Custo fixo deve ser um número' })
  @Min(0, { message: 'Custo fixo não pode ser negativo' })
  fixedCostPerUnit?: number = 0;

  @ApiProperty({
    description: 'Margem desejada em porcentagem',
    example: 30,
    minimum: 0,
    maximum: 95,
    required: false,
    default: 30,
  })
  @IsOptional()
  @IsNumber({}, { message: 'Margem deve ser um número' })
  @Min(0, { message: 'Margem não pode ser negativa' })
  @Max(95, { message: 'Margem não pode ser maior que 95%' })
  marginPercent?: number = 30;

  @ApiProperty({
    description: 'Markup alternativo em porcentagem',
    example: 100,
    minimum: 0,
    required: false,
    default: 0,
  })
  @IsOptional()
  @IsNumber({}, { message: 'Markup deve ser um número' })
  @Min(0, { message: 'Markup não pode ser negativo' })
  markupPercent?: number = 0;

  @ApiProperty({
    description: 'Custo de anúncios em porcentagem do preço de venda',
    example: 15,
    minimum: 0,
    maximum: 50,
    required: false,
    default: 0,
  })
  @IsOptional()
  @IsNumber({}, { message: 'Custo de ads (%) deve ser um número' })
  @Min(0, { message: 'Custo de ads não pode ser negativo' })
  @Max(50, { message: 'Custo de ads não pode ser maior que 50%' })
  adsCostPercent?: number = 0;

  @ApiProperty({
    description: 'Custo fixo de anúncios por venda',
    example: 10.00,
    required: false,
    default: 0,
  })
  @IsOptional()
  @IsNumber({}, { message: 'Custo fixo de ads deve ser um número' })
  @Min(0, { message: 'Custo fixo de ads não pode ser negativo' })
  adsCostFixed?: number = 0;

  @ApiProperty({
    description: 'ID do preset de plataforma',
    example: 'uuid-v4-string',
    required: false,
  })
  @IsOptional()
  @IsUUID(4, { message: 'ID da plataforma deve ser um UUID válido' })
  platformId?: string;

  @ApiProperty({
    description: 'ID do preset de gateway',
    example: 'uuid-v4-string',
    required: false,
  })
  @IsOptional()
  @IsUUID(4, { message: 'ID do gateway deve ser um UUID válido' })
  gatewayId?: string;

  @ApiProperty({
    description: 'Peso do produto em kg',
    example: 0.5,
    required: false,
  })
  @IsOptional()
  @IsNumber({}, { message: 'Peso deve ser um número' })
  @Min(0, { message: 'Peso não pode ser negativo' })
  weight?: number;

  @ApiProperty({
    description: 'Dimensões do produto',
    required: false,
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => DimensionsDto)
  dimensions?: DimensionsDto;

  @ApiProperty({
    description: 'Categoria do produto',
    example: 'Eletrônicos',
    required: false,
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({
    description: 'Tags para organização',
    example: ['smartphone', 'tech', 'importado'],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[] = [];

  @ApiProperty({
    description: 'Observações adicionais',
    required: false,
  })
  @IsOptional()
  @IsString()
  notes?: string;

  // Taxas customizadas (sobrescreve presets)
  @ApiProperty({
    description: 'Taxa da plataforma customizada (%)',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(50)
  customPlatformFee?: number;

  @ApiProperty({
    description: 'Taxa do gateway customizada (%)',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(20)
  customGatewayFee?: number;

  @ApiProperty({
    description: 'Taxa fixa do gateway customizada',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  customGatewayFixedFee?: number;

  @ApiProperty({
    description: 'Taxa de impostos customizada (%)',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(50)
  customTaxPercent?: number;
}