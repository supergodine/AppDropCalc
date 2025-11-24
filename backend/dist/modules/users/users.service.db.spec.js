"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
jest.setTimeout(30000);
const testing_1 = require("@nestjs/testing");
const users_service_1 = require("./users.service");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users.module");
const config_1 = require("@nestjs/config");
describe('UsersService (integration with DB)', () => {
    let app;
    let service;
    beforeAll(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    envFilePath: ['.env.test', '.env.local', '.env'],
                }),
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: process.env.DATABASE_HOST || 'localhost',
                    port: parseInt(process.env.DATABASE_PORT || '5432'),
                    username: process.env.DATABASE_USERNAME || 'postgres',
                    password: process.env.DATABASE_PASSWORD || 'postgres123',
                    database: process.env.DATABASE_NAME || 'dropcalc_test',
                    entities: [user_entity_1.User],
                    synchronize: true,
                    logging: true,
                }),
                users_module_1.UsersModule,
            ],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
        service = moduleFixture.get(users_service_1.UsersService);
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
//# sourceMappingURL=users.service.db.spec.js.map