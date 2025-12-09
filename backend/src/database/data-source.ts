import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../modules/users/entities/user.entity';
import { Calculation } from '../modules/calculations/entities/calculation.entity';
import { PresetPlatform } from '../modules/presets/entities/preset-platform.entity';
import { Gateway } from '../modules/presets/entities/gateway.entity';

// Load appropriate .env file
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : undefined,
});

const isProd = process.env.NODE_ENV === 'production';

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [User, Calculation, PresetPlatform, Gateway],
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
  synchronize: false, // keep false for migrations safety; runtime config may differ
  logging: process.env.LOG_LEVEL === 'debug',
  ssl: isProd ? { rejectUnauthorized: false } : false,
  extra: isProd ? { ssl: { rejectUnauthorized: false } } : undefined,
});

export default AppDataSource;
