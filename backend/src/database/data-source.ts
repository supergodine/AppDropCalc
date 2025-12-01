import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../modules/users/entities/user.entity';
import { Calculation } from '../modules/calculations/entities/calculation.entity';
import { PresetPlatform } from '../modules/presets/entities/preset-platform.entity';
import { Gateway } from '../modules/presets/entities/gateway.entity';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [User, Calculation, PresetPlatform, Gateway],
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
  synchronize: false,
  logging: true,
  ssl: { rejectUnauthorized: false },
});


export default AppDataSource;
