import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminLog } from './admin-log.entity';

@Injectable()
export class AdminLogsService {
  private readonly logger = new Logger(AdminLogsService.name);

  constructor(
    @InjectRepository(AdminLog)
    private readonly repo: Repository<AdminLog>,
  ) {}

  async record(adminId: string, action: string, opts?: { targetUserId?: string; targetPaymentId?: string; metadata?: any }) {
    try {
      const entry = this.repo.create({
        adminId,
        action,
        targetUserId: opts?.targetUserId,
        targetPaymentId: opts?.targetPaymentId,
        metadata: opts?.metadata || null,
      } as Partial<AdminLog>);
      return this.repo.save(entry);
    } catch (err) {
      this.logger.error('Failed to record admin log', err as any);
      return null;
    }
  }

  async findAll(opts: { page?: number; limit?: number; action?: string; adminId?: string; startDate?: string; endDate?: string }) {
    const page = Math.max(1, Number(opts.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(opts.limit) || 25));
    const qb = this.repo.createQueryBuilder('log');

    if (opts.action) {
      qb.andWhere('log.action ILIKE :action', { action: `%${opts.action}%` });
    }
    if (opts.adminId) {
      qb.andWhere('log.adminId = :adminId', { adminId: opts.adminId });
    }
    if (opts.startDate) {
      qb.andWhere('log.createdAt >= :startDate', { startDate: opts.startDate });
    }
    if (opts.endDate) {
      qb.andWhere('log.createdAt <= :endDate', { endDate: opts.endDate });
    }

    qb.orderBy('log.createdAt', 'DESC');
    qb.skip((page - 1) * limit).take(limit);

    const [data, total] = await qb.getManyAndCount();
    return { data, total, page, limit };
  }
}
