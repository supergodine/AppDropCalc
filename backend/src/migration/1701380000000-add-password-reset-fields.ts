import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordResetFieldsToUsersTable implements MigrationInterface {
  name = 'AddPasswordResetFieldsToUsersTable'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "users"
      ADD COLUMN "passwordResetToken" varchar(255) NULL,
      ADD COLUMN "passwordResetExpires" timestamp NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "users"
      DROP COLUMN "passwordResetToken",
      DROP COLUMN "passwordResetExpires"
    `);
  }
}
