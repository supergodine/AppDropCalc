import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsOptional,
  MinLength,
  MaxLength,
  IsAlpha,
  IsIn,
} from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João Silva',
    minLength: 2,
    maxLength: 100,
  })
  @IsString({ message: 'Nome deve ser uma string' })
  @MinLength(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
  @MaxLength(100, { message: 'Nome deve ter no máximo 100 caracteres' })
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao@exemplo.com',
    format: 'email',
  })
  @IsEmail({}, { message: 'Email deve ter um formato válido' })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'MinhaSenh@123',
    minLength: 8,
    maxLength: 100,
  })
  @IsString({ message: 'Senha deve ser uma string' })
  @MinLength(8, { message: 'Senha deve ter pelo menos 8 caracteres' })
  @MaxLength(100, { message: 'Senha deve ter no máximo 100 caracteres' })
  password: string;

  @ApiProperty({
    description: 'Moeda padrão do usuário',
    example: 'BRL',
    default: 'BRL',
    enum: ['BRL', 'USD', 'EUR', 'ARS', 'CLP', 'COP', 'MXN'],
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsIn(['BRL', 'USD', 'EUR', 'ARS', 'CLP', 'COP', 'MXN'], {
    message: 'Moeda deve ser uma das suportadas',
  })
  currencyDefault?: string = 'BRL';

  @ApiProperty({
    description: 'País do usuário',
    example: 'BR',
    default: 'BR',
    enum: ['BR', 'US', 'AR', 'CL', 'CO', 'MX', 'UY', 'PE'],
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsIn(['BR', 'US', 'AR', 'CL', 'CO', 'MX', 'UY', 'PE'], {
    message: 'País deve ser um dos suportados',
  })
  country?: string = 'BR';

  @ApiProperty({
    description: 'Telefone do usuário (opcional)',
    example: '+5511999999999',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(20, { message: 'Telefone deve ter no máximo 20 caracteres' })
  phone?: string;
}