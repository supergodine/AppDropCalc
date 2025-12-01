import { MigrationInterface, QueryRunner } from "typeorm";

export class ForceAddPasswordResetFields1701450000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "users"
      ADD COLUMN "passwordresettoken" varchar(255);
    `);
    await queryRunner.query(`
      ALTER TABLE "users"
      ADD COLUMN "passwordresetexpires" timestamp;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "users"
      DROP COLUMN IF EXISTS "passwordresettoken";
    `);
    await queryRunner.query(`
      ALTER TABLE "users"
      DROP COLUMN IF EXISTS "passwordresetexpires";
    `);
  }
}
