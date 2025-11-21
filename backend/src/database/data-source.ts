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

  // <<< ESTE É O CAMINHO CORRETO PARA O SEU PROJETO
  entities: [
    __dirname + '/../../modules/**/*.entity.{ts,js}',
  ],

  migrations: [
    __dirname + '/../migrations/*.{ts,js}',
  ],

  synchronize: false,
  logging: true,

  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
});
