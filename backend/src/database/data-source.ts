import { DataSource } from 'typeorm';
import { User } from '../modules/users/entities/user.entity';
import { Calculation } from '../modules/calculations/entities/calculation.entity';
import { PresetPlatform } from '../modules/presets/entities/preset-platform.entity';
import { Gateway } from '../modules/presets/entities/gateway.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Calculation, PresetPlatform, Gateway],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
  logging: true,
});
