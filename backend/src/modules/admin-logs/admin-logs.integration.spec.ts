// @ts-nocheck
jest.setTimeout(30000);
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Repository } from 'typeorm';

import { UsersModule } from '../users/users.module';
import { PaymentsModule } from '../payments/payments.module';
import { AdminLogsModule } from './admin-logs.module';

import { User } from '../users/entities/user.entity';
import { Payment } from '../payments/payment.entity';
import { AdminLog } from './admin-log.entity';

import { UsersService } from '../users/users.service';
import { PaymentsService } from '../payments/payments.service';
import { AdminLogsService } from './admin-logs.service';
import { PaymentsController } from '../payments/payments.controller';
import { UsersController } from '../users/users.controller';

describe('AdminLogs Integration', () => {
  let moduleFixture: TestingModule;
  let usersService: UsersService;
  let paymentsService: PaymentsService;
  let adminLogsService: AdminLogsService;
  let paymentsController: PaymentsController;
  let usersController: UsersController;

  let userRepo: Repository<User>;
  let paymentRepo: Repository<Payment>;
  let adminLogRepo: Repository<AdminLog>;

  beforeAll(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env.test', '.env.local', '.env'] }),
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DATABASE_HOST || 'localhost',
          port: parseInt(process.env.DATABASE_PORT || '5432'),
          username: process.env.DATABASE_USERNAME || 'postgres',
          password: process.env.DATABASE_PASSWORD || 'postgres123',
          database: process.env.DATABASE_NAME || 'dropcalc_test',
          entities: [User, Payment, AdminLog],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User, Payment, AdminLog]),
        UsersModule,
        PaymentsModule,
        AdminLogsModule,
      ],
    }).compile();

    usersService = moduleFixture.get<UsersService>(UsersService);
    paymentsService = moduleFixture.get<PaymentsService>(PaymentsService);
    adminLogsService = moduleFixture.get<AdminLogsService>(AdminLogsService);
    paymentsController = moduleFixture.get<PaymentsController>(PaymentsController);
    usersController = moduleFixture.get<UsersController>(UsersController);

    userRepo = moduleFixture.get<Repository<User>>(getRepositoryToken(User));
    paymentRepo = moduleFixture.get<Repository<Payment>>(getRepositoryToken(Payment));
    adminLogRepo = moduleFixture.get<Repository<AdminLog>>(getRepositoryToken(AdminLog));
  });

  afterAll(async () => {
    // cleanup DB
    if (paymentRepo) await paymentRepo.query('DELETE FROM payments');
    if (adminLogRepo) await adminLogRepo.query('DELETE FROM admin_logs');
    if (userRepo) await userRepo.query("DELETE FROM users WHERE email NOT LIKE 'massuplas%'");
    await moduleFixture.close();
  });

  it('creates admin log when admin downgrades by payment', async () => {
    // create admin and normal user
    const admin = await usersService.createAdminUser();
    const normal = userRepo.create({ name: 'Test User', email: `testuser+${Date.now()}@example.com`, passwordHash: 'x', plan: 'premium', role: 'user', status: 'active', country: 'BR', currencyDefault: 'BRL' });
    await userRepo.save(normal);

    // create pending payment for normal user
    const payment = await paymentsService.createPending(normal.id, 'premium', 19.9, `premium_${normal.id}`);

    // call controller to downgrade by payment (simulate admin request)
    const res = await paymentsController.adminDowngradeByPayment({ user: { id: admin.id, sub: admin.id } }, payment.id);
    expect(res).toBeDefined();
    expect(res.ok).toBe(true);

    // check admin log
    const logs = await adminLogRepo.find({ where: { adminId: admin.id } });
    const found = logs.find(l => l.action === 'downgrade_by_payment' && l.targetPaymentId === payment.id);
    expect(found).toBeDefined();
    expect(found.adminId).toBe(admin.id);
  });

  it('supports pagination and filters on admin logs', async () => {
    const admin = await usersService.createAdminUser();
    // create multiple logs
    for (let i = 0; i < 30; i++) {
      await adminLogsService.record(admin.id, `test_action_${i % 3}`, { metadata: { idx: i } });
    }

    const resultPage1 = await adminLogsService.findAll({ page: 1, limit: 10 });
    expect(resultPage1.data.length).toBe(10);
    expect(resultPage1.total).toBeGreaterThanOrEqual(30);

    const filtered = await adminLogsService.findAll({ page: 1, limit: 10, action: 'test_action_1' });
    expect(filtered.data.every(d => d.action.includes('test_action_1'))).toBe(true);
  });

  it('records list_payments when admin lists payments', async () => {
    const admin = await usersService.createAdminUser();
    // create some payments
    const normal = userRepo.create({ name: 'Another', email: `another+${Date.now()}@example.com`, passwordHash: 'x', plan: 'gold', role: 'user', status: 'active', country: 'BR', currencyDefault: 'BRL' });
    await userRepo.save(normal);
    await paymentsService.createPending(normal.id, 'gold', 9.9, `gold_${normal.id}`);

    const list = await paymentsController.adminList({ user: { id: admin.id, sub: admin.id }, query: { status: 'pending' } });
    expect(Array.isArray(list)).toBe(true);

    // check a log was created for list_payments
    const logs = await adminLogRepo.find({ where: { adminId: admin.id, action: 'list_payments' } });
    expect(logs.length).toBeGreaterThanOrEqual(1);
  });

  it('processes past_due downgrades and logs action', async () => {
    const admin = await usersService.createAdminUser();
    // create user and mark past due with immediate downgrade
    const u = userRepo.create({ name: 'PastDue', email: `pastdue+${Date.now()}@example.com`, passwordHash: 'x', plan: 'gold', role: 'user', status: 'active', country: 'BR', currencyDefault: 'BRL' });
    const saved = await userRepo.save(u);
    // set plan_expires_at in the past
    await userRepo.update(saved.id, { subscriptionStatus: 'past_due', planExpiresAt: new Date(Date.now() - 1000) });

    // call usersController.processPastDue
    const res = await usersController.processPastDue({ user: { id: admin.id, sub: admin.id } });
    // result should be object with downgraded array
    expect(res).toBeDefined();

    // check admin log
    const logs = await adminLogRepo.find({ where: { adminId: admin.id, action: 'process_past_due' } });
    expect(logs.length).toBeGreaterThanOrEqual(1);
  });
});
