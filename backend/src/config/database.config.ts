import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

// Entities
import { User } from '../modules/users/entities/user.entity';
import { Calculation } from '../modules/calculations/entities/calculation.entity';
import { PresetPlatform } from '../modules/presets/entities/preset-platform.entity';
import { Gateway } from '../modules/presets/entities/gateway.entity';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const isDevelopment = this.configService.get('NODE_ENV') !== 'production';
    // Sempre usar PostgreSQL, nunca SQLite
    return {
      type: 'postgres',
      url: this.configService.get('DATABASE_URL'),
      host: this.configService.get('DATABASE_HOST', 'localhost'),
      port: this.configService.get('DATABASE_PORT', 5432),
      username: this.configService.get('DATABASE_USERNAME', 'postgres'),
      password: this.configService.get('DATABASE_PASSWORD', 'postgres123'),
      database: this.configService.get('DATABASE_NAME', 'dropcalc'),
      entities: [
        process.env.NODE_ENV === 'production'
          ? 'dist/modules/**/entities/*.js'
          : 'src/modules/**/entities/*.entity.ts',
      ],
      migrations: ['dist/database/migrations/*.js'],
      synchronize: isDevelopment, // Apenas em desenvolvimento
      logging: isDevelopment,
      ssl: this.configService.get('NODE_ENV') === 'production' ? { rejectUnauthorized: false } : false,
    };
  }
}

// Configuração para TypeORM CLI
const config: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres123',
  database: process.env.DATABASE_NAME || 'dropcalc',
  entities: [
    'src/modules/**/entities/*.entity.ts',
    'dist/modules/**/entities/*.entity.js',
  ],
  migrations: ['src/database/migrations/*.ts', 'dist/database/migrations/*.js'],
  synchronize: false,
  logging: process.env.NODE_ENV !== 'production',
};

export default new DataSource(config);