import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    require('../modules/users/entities/user.entity').User,
    require('../modules/calculations/entities/calculation.entity').Calculation,
    require('../modules/presets/entities/preset-platform.entity').PresetPlatform,
    require('../modules/presets/entities/gateway.entity').Gateway,
  ],
  migrations: [
    __dirname + '/../migrations/*.{js,ts}',
  ],
  synchronize: false,
  logging: true,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
});
