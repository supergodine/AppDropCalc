// @ts-nocheck
jest.setTimeout(30000);
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users.module';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

describe('UsersService (integration with Postgres)', () => {
  let app: INestApplication;
  let service: UsersService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ['.env.test', '.env.local', '.env'],
        }),
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DATABASE_HOST || 'localhost',
          port: parseInt(process.env.DATABASE_PORT || '5432'),
          username: process.env.DATABASE_USERNAME || 'postgres',
          password: process.env.DATABASE_PASSWORD || 'postgres123',
          database: process.env.DATABASE_NAME || 'dropcalc_test',
          entities: [User],
          synchronize: true,
        }),
        UsersModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    service = moduleFixture.get<UsersService>(UsersService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create and persist a new admin user', async () => {
    const user = await service.createAdminUser();
    expect(user).toBeDefined();
    expect(user.email).toBe('massuplas@gmail.com');
    const found = await service.findByEmail('massuplas@gmail.com');
    expect(found).not.toBeNull();
    expect(found?.id).toBe(user.id);
  });

  it('should return the same user if already exists', async () => {
    const user1 = await service.createAdminUser();
    const user2 = await service.createAdminUser();
    expect(user2.id).toBe(user1.id);
  });
});
