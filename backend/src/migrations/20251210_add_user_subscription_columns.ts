import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserSubscriptionColumns20251210 implements MigrationInterface {
  name = 'AddUserSubscriptionColumns20251210';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "subscription_period" character varying(50)`);
    await queryRunner.query(`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "subscription_status" character varying(50)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN IF EXISTS "subscription_status"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN IF EXISTS "subscription_period"`);
  }
}
