import { ResetPasswordDto } from './dto/reset-password.dto';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { SignUpDto } from './dto/signup.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    resetPassword(dto: ResetPasswordDto): Promise<{
        success: boolean;
        message: string;
    }>;
    findUserByEmail(email: string): Promise<User | null>;
    comparePassword(password: string, hash: string): Promise<boolean>;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    signUp(signUpDto: SignUpDto): Promise<AuthResponseDto>;
    validateUser(email: string, password: string): Promise<User | null>;
    login(user: User): Promise<AuthResponseDto>;
    validateGoogleUser(googleProfile: any): Promise<User>;
    handleGoogleLogin(googleUser: any): Promise<AuthResponseDto>;
    refresh(user: User): Promise<AuthResponseDto>;
    private generateAuthResponse;
    canCreateCalculation(userId: string): Promise<boolean>;
    incrementCalculationCount(userId: string): Promise<void>;
    findUserById(id: string): Promise<User | null>;
    createAdminUser(): Promise<{
        message: string;
        created: boolean;
    }>;
}
