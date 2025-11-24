import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',

  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  // ==== CAMINHO DEFINITIVO (FUNCIONA EM DIST E EM DEV) ====
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
