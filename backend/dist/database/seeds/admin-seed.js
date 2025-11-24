"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = seedAdmin;
const bcrypt = require("bcrypt");
const user_entity_1 = require("../../modules/users/entities/user.entity");
async function seedAdmin(dataSource) {
    console.log('👑 Criando usuário administrador...');
    const userRepository = dataSource.getRepository(user_entity_1.User);
    const existingAdmin = await userRepository.findOne({
        where: { email: 'comercial@calientabeauty.com' }
    });
    if (existingAdmin) {
        console.log('👑 Usuário administrador já existe');
        if (existingAdmin.role !== user_entity_1.UserRole.ADMIN) {
            existingAdmin.role = user_entity_1.UserRole.ADMIN;
            await userRepository.save(existingAdmin);
            console.log('👑 Role de administrador atualizada');
        }
        return;
    }
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash('001266', saltRounds);
    const adminUser = userRepository.create({
        name: 'Administrador',
        email: 'comercial@calientabeauty.com',
        passwordHash,
        role: user_entity_1.UserRole.ADMIN,
        plan: user_entity_1.UserPlan.PREMIUM,
        status: user_entity_1.UserStatus.ACTIVE,
        currencyDefault: 'BRL',
        country: 'BR',
        calculationsCount: 0,
    });
    await userRepository.save(adminUser);
    console.log('👑 Usuário administrador criado com sucesso!');
    console.log('📧 Email: comercial@calientabeauty.com');
    console.log('🔑 Senha: 001266');
    console.log('🎯 Role: ADMIN');
}
//# sourceMappingURL=admin-seed.js.map