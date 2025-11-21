import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

// Carrega variáveis de ambiente
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',

  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  // ENTITIES — FUNCIONA EM DEV (.ts) E PRODUÇÃO (.js)
  entities: [
    __dirname + '/../modules/**/*.entity.{ts,js}',
  ],

  // MIGRATIONS — FUNCIONA EM DEV E EM DIST
  migrations: [
    __dirname + '/migrations/*.{ts,js}',
  ],

  synchronize: false,
  logging: true,

  // Railway exige SSL
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
});
