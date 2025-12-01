import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordResetFieldsToUser1700840000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD COLUMN IF NOT EXISTS "passwordresettoken" varchar(255),
            ADD COLUMN IF NOT EXISTS "passwordresetexpires" timestamp;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users"
            DROP COLUMN IF EXISTS "passwordresettoken",
            DROP COLUMN IF EXISTS "passwordresetexpires";
        `);
    }
}
