import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserRole, UserPlan, UserStatus } from '../../modules/users/entities/user.entity';

export async function seedAdmin(dataSource: DataSource) {
  console.log('👑 Criando usuário administrador...');
  
  const userRepository = dataSource.getRepository(User);
  
  // Verificar se já existe um admin com este email
  const existingAdmin = await userRepository.findOne({
    where: { email: 'comercial@calientabeauty.com' }
  });

  if (existingAdmin) {
    console.log('👑 Usuário administrador já existe');
    
    // Atualizar para garantir que tem role de admin
    if (existingAdmin.role !== UserRole.ADMIN) {
      existingAdmin.role = UserRole.ADMIN;
      await userRepository.save(existingAdmin);
      console.log('👑 Role de administrador atualizada');
    }
    
    return;
  }

  // Hash da senha
  const saltRounds = 12;
  const passwordHash = await bcrypt.hash('001266', saltRounds);

  // Criar usuário administrador
  const adminUser = userRepository.create({
    name: 'Administrador',
    email: 'comercial@calientabeauty.com',
    passwordHash,
    role: UserRole.ADMIN,
    plan: UserPlan.PREMIUM, // Admin tem acesso premium
    status: UserStatus.ACTIVE,
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