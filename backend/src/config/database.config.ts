import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

// Entities
import { User } from '../modules/users/entities/user.entity';
import { Calculation } from '../modules/calculations/entities/calculation.entity';
import { PresetPlatform } from '../modules/presets/entities/preset-platform.entity';
import { Gateway } from '../modules/presets/entities/gateway.entity';
import { Payment } from '../modules/payments/payment.entity';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const isProduction = this.configService.get('NODE_ENV') === 'production';
    const databaseUrl = this.configService.get<string>('DATABASE_URL') || undefined;

    const base: TypeOrmModuleOptions = {
      type: 'postgres',
      url: databaseUrl,
      // Register Payment entity so TypeORM has metadata at runtime
      entities: [User, Calculation, PresetPlatform, Gateway, Payment],
      migrations: [__dirname + '/../database/migrations/*.{ts,js}'],
      synchronize: !isProduction,
      logging: this.configService.get('LOG_LEVEL') === 'debug',
      // Use object form for SSL so we can control rejectUnauthorized
      ssl: isProduction ? { rejectUnauthorized: false } : false,
      extra: isProduction ? { ssl: { rejectUnauthorized: false } } : undefined,
    };

    // In production require DATABASE_URL (no automatic fallback)
    if (isProduction && !databaseUrl) {
      throw new Error('DATABASE_URL must be set in production (no fallback to DB_HOST allowed)');
    }

    // If not production and DATABASE_URL not provided, fall back to individual DB_* variables
    if (!isProduction && !databaseUrl) {
      return {
        ...base,
        url: undefined,
        host: this.configService.get('DB_HOST'),
        port: Number(this.configService.get('DB_PORT') || 5432),
        username: this.configService.get('DB_USERNAME'),
        password: this.configService.get('DB_PASSWORD'),
        database: this.configService.get('DB_NAME'),
      } as TypeOrmModuleOptions;
    }

    return base;
  }
}

// DatabaseConfig provides a single source of TypeORM runtime config.