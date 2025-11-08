import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

export class UserResponseDto {
  @ApiProperty({
    description: 'ID único do usuário',
    example: 'uuid-v4-string',
  })
  id: string;

  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João Silva',
  })
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao@exemplo.com',
  })
  email: string;

  @ApiProperty({
    description: 'Moeda padrão',
    example: 'BRL',
  })
  currencyDefault: string;

  @ApiProperty({
    description: 'País do usuário',
    example: 'BR',
  })
  country: string;

  @ApiProperty({
    description: 'Plano do usuário',
    example: 'free',
    enum: ['free', 'pro', 'premium'],
  })
  plan: string;

  @ApiProperty({
    description: 'Status da conta',
    example: 'active',
    enum: ['active', 'inactive', 'suspended'],
  })
  status: string;

  @ApiProperty({
    description: 'Função do usuário',
    example: 'user',
    enum: ['user', 'admin'],
  })
  role: string;

  @ApiProperty({
    description: 'URL do avatar',
    example: 'https://example.com/avatar.jpg',
    required: false,
  })
  avatar?: string;

  @ApiProperty({
    description: 'Número de cálculos realizados',
    example: 25,
  })
  calculationsCount: number;

  @ApiProperty({
    description: 'Data de criação da conta',
    example: '2024-01-15T10:30:00Z',
  })
  createdAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.currencyDefault = user.currencyDefault;
    this.country = user.country;
    this.plan = user.plan;
    this.status = user.status;
    this.role = user.role;
    this.avatar = user.avatar;
    this.calculationsCount = user.calculationsCount;
    this.createdAt = user.createdAt;
  }
}

export class AuthResponseDto {
  @ApiProperty({
    description: 'Token de acesso JWT',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;

  @ApiProperty({
    description: 'Tipo do token',
    example: 'Bearer',
    default: 'Bearer',
  })
  tokenType: string = 'Bearer';

  @ApiProperty({
    description: 'Tempo de expiração do token em segundos',
    example: 604800,
  })
  expiresIn: number;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
    type: () => UserResponseDto,
  })
  user: UserResponseDto;

  @ApiProperty({
    description: 'Mensagem de sucesso',
    example: 'Login realizado com sucesso',
  })
  message: string;
}