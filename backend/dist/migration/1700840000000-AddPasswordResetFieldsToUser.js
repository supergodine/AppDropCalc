"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPasswordResetFieldsToUser1700840000000 = void 0;
class AddPasswordResetFieldsToUser1700840000000 {
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD COLUMN IF NOT EXISTS "passwordResetToken" varchar(255),
            ADD COLUMN IF NOT EXISTS "passwordResetExpires" timestamp;
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users"
            DROP COLUMN IF EXISTS "passwordResetToken",
            DROP COLUMN IF EXISTS "passwordResetExpires";
        `);
    }
}
exports.AddPasswordResetFieldsToUser1700840000000 = AddPasswordResetFieldsToUser1700840000000;
//# sourceMappingURL=1700840000000-AddPasswordResetFieldsToUser.js.map