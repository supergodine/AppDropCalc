import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserPlan, UserRole } from './entities/user.entity';
import { UserStatus } from './entities/user.entity';

@Injectable()
export class UsersService {
  async createAdminUser(): Promise<User> {
    const email = 'massuplas@gmail.com';
    const name = 'Diego';
    const password = '01659760';
    const passwordHash = await bcrypt.hash(password, 12);
    let user = await this.userRepository.findOne({ where: { email } });
    if (user) return user;
    user = this.userRepository.create({
      name,
      email,
      passwordHash,
      plan: UserPlan.PREMIUM,
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      country: 'BR',
      currencyDefault: 'BRL',
      phone: null,
      planExpiresAt: null,
    });
    return await this.userRepository.save(user);
  }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findById(id: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      select: ['id', 'email', 'name', 'createdAt', 'updatedAt'],
      order: { createdAt: 'DESC' },
    });
  }

  async updateProfile(id: string, updateData: Partial<User>): Promise<User> {
    await this.userRepository.update(id, updateData);
    return this.findById(id);
  }
}