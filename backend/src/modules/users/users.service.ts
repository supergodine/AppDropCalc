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

  async updatePasswordResetToken(id: string, token: string, expiresAt: Date): Promise<void> {
    await this.userRepository.update(id, {
      passwordResetToken: token,
      passwordResetExpires: expiresAt,
    });
  }

  // Update user's plan/subscription details
  async updatePlan(userId: string, planId: string, period: string = 'monthly'): Promise<User | null> {
    const user = await this.findById(userId);
    if (!user) return null;

    // Compute expiration based on period
    const now = new Date();
    let expiresAt: Date | null = null;
    const p = (period || 'monthly').toLowerCase();
    if (p === 'monthly' || p === 'month') {
      expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    } else if (p === 'quarter' || p === 'quarterly' || p === 'trimestral') {
      expiresAt = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000);
    } else if (p === 'annual' || p === 'yearly' || p === 'annualy') {
      expiresAt = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
    } else {
      // default to 30 days
      expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    }

    await this.userRepository.update(userId, {
      plan: planId as any,
      planExpiresAt: expiresAt,
      subscriptionPeriod: p,
      subscriptionStatus: 'active',
      status: UserStatus.ACTIVE,
    });

    return this.findById(userId);
  }
}