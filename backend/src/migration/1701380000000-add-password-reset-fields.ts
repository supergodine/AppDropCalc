import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordResetFieldsToUsersTable implements MigrationInterface {
  name = 'AddPasswordResetFieldsToUsersTable'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "users"
      ADD COLUMN "passwordresettoken" varchar(255) NULL,
      ADD COLUMN "passwordresetexpires" timestamp NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "users"
      DROP COLUMN "passwordresettoken",
      DROP COLUMN "passwordresetexpires"
    `);
  }
}
