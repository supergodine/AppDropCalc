import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User, UserRole, UserPlan, UserStatus } from '../users/entities/user.entity';
import { SignUpDto } from './dto/signup.dto';
import { AuthResponseDto, UserResponseDto } from './dto/auth-response.dto';

@Injectable()
export class AuthService {
  // Buscar usuário por email
  async findUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }
  // Comparar senha com hash
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Criar nova conta de usuário
   */
  async signUp(signUpDto: SignUpDto): Promise<AuthResponseDto> {
    const { email, password, ...userData } = signUpDto;

    // Verificar se email já existe
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Email já está em uso');
    }

    // Validação de senha mínima
    if (!password || password.length < 8) {
      throw new BadRequestException('A senha deve ter pelo menos 8 caracteres');
    }

    // Hash da senha
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Criar usuário com status ativo
    const user = this.userRepository.create({
      ...userData,
      email,
      passwordHash,
      status: UserStatus.ACTIVE,
    });

    const savedUser = await this.userRepository.save(user);

    // Log de criação
    console.log('✅ Usuário criado:', savedUser.email, 'Status:', savedUser.status);

    // Gerar token
    return this.generateAuthResponse(savedUser, 'Conta criada com sucesso');
  }

  /**
   * Validar credenciais para login local
   */
  async validateUser(email: string, password: string): Promise<User | null> {
    console.log('🔍 Validando usuário:', email);
    
    const user = await this.userRepository.findOne({
      where: { email },
    });

    console.log('👤 Usuário encontrado:', user ? 'Sim' : 'Não');

    if (!user || !user.passwordHash) {
      console.log('❌ Usuário não encontrado ou sem senha');
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    console.log('🔑 Senha válida:', isPasswordValid);
    
    if (!isPasswordValid) {
      console.log('❌ Senha inválida');
      return null;
    }

    // Atualizar último login
    await this.userRepository.update(user.id, {
      lastLoginAt: new Date(),
    });

    console.log('✅ Login validado com sucesso');
    return user;
  }

  /**
   * Login do usuário
   */
  async login(user: User): Promise<AuthResponseDto> {
    // Forçar plano premium para o usuário Diego
    if (user.email === 'massuplas@gmail.com') {
      user.plan = UserPlan.PREMIUM;
      user.role = UserRole.ADMIN;
    }
    // Permitir login social (Google) sem senha
    if (user.googleId) {
      // Usuário Google: validar apenas por email/googleId
      if (!user.email || !user.googleId) {
        throw new UnauthorizedException('Usuário Google inválido');
      }
    } else {
      // Usuário tradicional: validar status
      if (user.status !== 'active') {
        throw new UnauthorizedException('Usuário inativo');
      }
    }

    // Gerar token JWT
    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      tokenType: 'Bearer',
      expiresIn: 604800, // 7 dias em segundos (7 * 24 * 60 * 60)
      message: 'Login realizado com sucesso',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        currencyDefault: user.currencyDefault,
        country: user.country,
        plan: user.plan,
        status: user.status,
        role: user.role,
        createdAt: user.createdAt,
        calculationsCount: 0
      },
    };
  }

  /**
   * Validar usuário Google OAuth
   */
  async validateGoogleUser(googleProfile: any): Promise<User> {
    const { id: googleId, emails, name, photos } = googleProfile;
    const email = emails[0]?.value;

    if (!email) {
      throw new BadRequestException('Email não encontrado no perfil Google');
    }

    // Procurar usuário existente
    let user = await this.userRepository.findOne({
      where: [{ email }, { googleId }],
    });

    if (user) {
      // Atualizar dados se necessário
      if (!user.googleId) {
        user.googleId = googleId;
      }
      if (!user.avatar && photos?.[0]?.value) {
        user.avatar = photos[0].value;
      }
      user.lastLoginAt = new Date();
      
      return await this.userRepository.save(user);
    }

    // Criar novo usuário
    user = this.userRepository.create({
      email,
      name: name?.givenName + ' ' + name?.familyName || email.split('@')[0],
      googleId,
      avatar: photos?.[0]?.value,
      lastLoginAt: new Date(),
    });

    return await this.userRepository.save(user);
  }

  /**
   * Handle Google login simulation for demo
   */
  async handleGoogleLogin(googleUser: any): Promise<AuthResponseDto> {
    const { id, email, name } = googleUser;

    // Procurar usuário existente por email
    let user = await this.userRepository.findOne({
      where: { email },
    });

    if (user) {
      // Atualizar último login
      user.lastLoginAt = new Date();
      await this.userRepository.save(user);
    } else {
      // Criar novo usuário
      user = this.userRepository.create({
        email,
        name: name || email.split('@')[0],
        googleId: id,
        lastLoginAt: new Date(),
      });
      
      user = await this.userRepository.save(user);
    }

    // Gerar token JWT
    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      tokenType: 'Bearer',
      expiresIn: 604800, // 7 dias em segundos (7 * 24 * 60 * 60)
      message: 'Login realizado com sucesso',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        currencyDefault: user.currencyDefault,
        country: user.country,
        plan: user.plan,
        status: user.status,
        role: user.role,
        createdAt: user.createdAt,
        calculationsCount: 0
      },
    };
  }

  /**
   * Renovar token
   */
  async refresh(user: User): Promise<AuthResponseDto> {
    // Buscar dados atualizados do usuário
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id },
    });

    if (!currentUser) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    return this.generateAuthResponse(currentUser, 'Token renovado com sucesso');
  }

  /**
   * Gerar resposta de autenticação com token JWT
   */
  private generateAuthResponse(user: User, message: string): AuthResponseDto {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      plan: user.plan,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      tokenType: 'Bearer',
      expiresIn: 7 * 24 * 60 * 60, // 7 dias em segundos
      user: new UserResponseDto(user),
      message,
    };
  }

  /**
   * Verificar se usuário pode criar cálculos
   */
  async canCreateCalculation(userId: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      return false;
    }

    return user.canCreateCalculation() && user.isPlanActive();
  }

  /**
   * Incrementar contador de cálculos
   */
  async incrementCalculationCount(userId: string): Promise<void> {
    await this.userRepository.increment(
      { id: userId },
      'calculationsCount',
      1,
    );
  }

  /**
   * Buscar usuário por ID
   */
  async findUserById(id: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  /**
   * Criar usuário administrador (apenas na primeira execução)
   */
  async createAdminUser(): Promise<{ message: string; created: boolean }> {
    // Verificar se já existe um admin
    const existingAdmin = await this.userRepository.findOne({
      where: { email: 'comercial@calientabeauty.com' }
    });

    if (existingAdmin) {
      // Garantir que tem role de admin
      if (existingAdmin.role !== UserRole.ADMIN) {
        existingAdmin.role = UserRole.ADMIN;
        await this.userRepository.save(existingAdmin);
        return {
          message: 'Usuário existente promovido a administrador',
          created: false
        };
      }
      
      return {
        message: 'Usuário administrador já existe',
        created: false
      };
    }

    // Hash da senha
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash('001266', saltRounds);

    // Criar usuário administrador
    const adminUser = this.userRepository.create({
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

    await this.userRepository.save(adminUser);
    
    return {
      message: 'Usuário administrador criado com sucesso! Email: comercial@calientabeauty.com, Senha: 001266',
      created: true
    };
  }
}