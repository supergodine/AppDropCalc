import { AuthService } from './auth.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { MailService } from './mail.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
export declare class AuthController {
    private readonly authService;
    private readonly mailService;
    constructor(authService: AuthService, mailService: MailService);
    forgotPassword(body: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(body: ResetPasswordDto): Promise<{
        success: boolean;
        message: string;
    }>;
    signUp(signUpDto: SignUpDto): Promise<AuthResponseDto>;
    login(req: any): Promise<AuthResponseDto>;
    testLogin(loginDto: LoginDto): Promise<any>;
    getProfile(req: any): Promise<{
        user: any;
        message: string;
    }>;
    refresh(req: any): Promise<AuthResponseDto>;
    logout(req: any): Promise<{
        message: string;
        timestamp: string;
    }>;
    createAdmin(): Promise<{
        message: string;
        created: boolean;
    }>;
}
