import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createAdminUser', () => {
    it('should create a new admin user if not exists', async () => {
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(null);
      jest.spyOn(userRepository, 'create').mockImplementation((data) => data as User);
      jest.spyOn(userRepository, 'save').mockImplementation(async (user) => ({ ...user, id: '1' } as User));

      const user = await service.createAdminUser();
      expect(user).toHaveProperty('email', 'massuplas@gmail.com');
      expect(user).toHaveProperty('role');
      expect(user.role).toBeDefined();
    });

    it('should return existing user if already exists', async () => {
      const existingUser = { id: '1', email: 'massuplas@gmail.com' } as User;
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(existingUser);
      const user = await service.createAdminUser();
      expect(user).toBe(existingUser);
    });
  });
});
