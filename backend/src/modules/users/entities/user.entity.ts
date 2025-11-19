import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  // OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
// import { Calculation } from '../../calculations/entities/calculation.entity';

export enum UserPlan {
  FREE = 'free',
  PRO = 'pro',
  PREMIUM = 'premium',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Exclude()
  passwordHash?: string;

  @Column({ type: 'varchar', length: 10, default: 'BRL' })
  currencyDefault: string; // ISO 4217 currency code

  @Column({ type: 'varchar', length: 5, default: 'BR' })
  country: string; // ISO 3166-1 alpha-2 country code

  @Column({ type: 'varchar', length: 50, default: 'free' })
  plan: UserPlan;

  @Column({ type: 'varchar', length: 50, default: 'active' })
  status: UserStatus;

  @Column({ type: 'varchar', length: 20, default: 'user' })
  role: UserRole;

  @Column({ type: 'varchar', length: 255, nullable: true })
  googleId?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar?: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone?: string;

  @Column({ type: 'text', nullable: true })
  bio?: string;

  @Column({ type: 'json', nullable: true })
  preferences?: {
    theme?: 'light' | 'dark' | 'auto';
    language?: string;
    timezone?: string;
    notifications?: {
      email?: boolean;
      push?: boolean;
    };
  };

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt?: Date;

  @Column({ type: 'int', default: 0 })
  calculationsCount: number; // Cache do número de cálculos

  @Column({ type: 'timestamp', nullable: true })
  planExpiresAt?: Date; // Para planos pagos

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relacionamentos
  // @OneToMany(() => Calculation, (calculation) => calculation.user)
  // calculations: Calculation[];

  // Métodos auxiliares
  canCreateCalculation(): boolean {
    if (this.plan === UserPlan.FREE) {
      return this.calculationsCount < 50; // Limite free
    }
    return true; // Pro e Premium são ilimitados
  }

  isPlanActive(): boolean {
    if (this.plan === UserPlan.FREE) return true;
    if (!this.planExpiresAt) return false;
    return new Date() < this.planExpiresAt;
  }

  isAdmin(): boolean {
    return this.role === UserRole.ADMIN;
  }

  getDisplayName(): string {
    return this.name || this.email.split('@')[0];
  }
}