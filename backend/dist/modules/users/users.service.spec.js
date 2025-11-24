"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const users_service_1 = require("./users.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
describe('UsersService', () => {
    let service;
    let userRepository;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                users_service_1.UsersService,
                {
                    provide: (0, typeorm_1.getRepositoryToken)(user_entity_1.User),
                    useClass: typeorm_2.Repository,
                },
            ],
        }).compile();
        service = module.get(users_service_1.UsersService);
        userRepository = module.get((0, typeorm_1.getRepositoryToken)(user_entity_1.User));
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('createAdminUser', () => {
        it('should create a new admin user if not exists', async () => {
            jest.spyOn(userRepository, 'findOne').mockResolvedValue(null);
            jest.spyOn(userRepository, 'create').mockImplementation((data) => data);
            jest.spyOn(userRepository, 'save').mockImplementation(async (user) => ({ ...user, id: '1' }));
            const user = await service.createAdminUser();
            expect(user).toHaveProperty('email', 'massuplas@gmail.com');
            expect(user).toHaveProperty('role');
            expect(user.role).toBeDefined();
        });
        it('should return existing user if already exists', async () => {
            const existingUser = { id: '1', email: 'massuplas@gmail.com' };
            jest.spyOn(userRepository, 'findOne').mockResolvedValue(existingUser);
            const user = await service.createAdminUser();
            expect(user).toBe(existingUser);
        });
    });
});
//# sourceMappingURL=users.service.spec.js.map