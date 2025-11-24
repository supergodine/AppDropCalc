import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordResetFieldsToUser1700840000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD COLUMN IF NOT EXISTS "passwordResetToken" varchar(255),
            ADD COLUMN IF NOT EXISTS "passwordResetExpires" timestamp;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users"
            DROP COLUMN IF EXISTS "passwordResetToken",
            DROP COLUMN IF EXISTS "passwordResetExpires";
        `);
    }
}
