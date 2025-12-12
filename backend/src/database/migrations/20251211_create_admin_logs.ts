import { MigrationInterface, QueryRunner } from 'typeorm';

// Added JavaScript-style timestamp suffix so TypeORM recognizes the migration name
export class CreateAdminLogs20251211120000 implements MigrationInterface {
  name = 'CreateAdminLogs20251211120000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Ensure pgcrypto extension for gen_random_uuid is available
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS pgcrypto`);

    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "admin_logs" (
        "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        "adminId" uuid NOT NULL,
        "action" character varying NOT NULL,
        "targetUserId" uuid,
        "targetPaymentId" uuid,
        "metadata" jsonb,
        "createdAt" timestamptz NOT NULL DEFAULT now()
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "admin_logs"`);
  }
}
