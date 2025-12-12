import * as bcrypt from 'bcrypt';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserPlan, UserRole } from './entities/user.entity';
import { UserStatus } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
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

  // Mark a user's subscription as past_due and schedule a downgrade after `graceHours`.
  async markSubscriptionPastDue(userId: string, graceHours = 48): Promise<User | null> {
    const user = await this.findById(userId);
    if (!user) return null;
    const now = new Date();
    const downgradeAt = new Date(now.getTime() + graceHours * 60 * 60 * 1000);
    await this.userRepository.update(userId, {
      subscriptionStatus: 'past_due',
      // reuse planExpiresAt as the scheduled downgrade moment for simplicity
      planExpiresAt: downgradeAt,
    });
    this.logger?.log?.(`Marked user ${userId} as past_due; scheduled downgrade at ${downgradeAt.toISOString()}`);
    return this.findById(userId);
  }

  // Downgrade user to basic/free immediately.
  async downgradeToBasic(userId: string): Promise<User | null> {
    const user = await this.findById(userId);
    if (!user) return null;
    await this.userRepository.update(userId, {
      plan: 'free',
      planExpiresAt: null,
      subscriptionPeriod: null,
      subscriptionStatus: 'inactive',
    });
    this.logger?.log?.(`Downgraded user ${userId} to free`);
    return this.findById(userId);
  }

  // Process all users that have been marked past_due and whose scheduled downgrade time has arrived.
  async processPastDueDowngrades(): Promise<{ downgraded: string[] }> {
    const now = new Date();
    const usersToDowngrade = await this.userRepository.createQueryBuilder('user')
      .where("user.subscription_status = :status", { status: 'past_due' })
      .andWhere('user.plan_expires_at <= :now', { now })
      .getMany();

    const downgraded: string[] = [];
    for (const u of usersToDowngrade) {
      await this.downgradeToBasic(u.id);
      downgraded.push(u.id);
    }
    return { downgraded };
  }
}