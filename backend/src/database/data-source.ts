import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../modules/users/entities/user.entity';
import { Calculation } from '../modules/calculations/entities/calculation.entity';
import { PresetPlatform } from '../modules/presets/entities/preset-platform.entity';
import { Gateway } from '../modules/presets/entities/gateway.entity';
import { Payment } from '../modules/payments/payment.entity';
import { AdminLog } from '../modules/admin-logs/admin-log.entity';

// Load appropriate .env file
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : undefined,
});

const isProd = process.env.NODE_ENV === 'production';

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // Use a glob so both TS (dev) and JS (dist) builds are picked up in different environments
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
  synchronize: false, // keep false for migrations safety; runtime config may differ
  logging: process.env.LOG_LEVEL === 'debug',
  ssl: isProd ? { rejectUnauthorized: false } : false,
  extra: isProd ? { ssl: { rejectUnauthorized: false } } : undefined,
});

export default AppDataSource;
