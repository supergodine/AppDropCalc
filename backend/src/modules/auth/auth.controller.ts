import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { MailService } from './mail.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
// import { GoogleAuthGuard } from './guards/google-auth.guard'; // DESATIVADO - USANDO FIREBASE
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto } from './dto/auth-response.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly mailService: MailService,
  ) {}
  @Post('forgot-password')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({ summary: 'Solicitar recuperação de senha (envio de e-mail)' })
  @ApiBody({ type: ForgotPasswordDto })
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    const { email } = dto;
    try {
      await this.authService.requestPasswordReset(email);
      console.log('[forgot-password] Solicitação recebida para:', email);
    } catch (err) {
      // Nunca vazar detalhes para o cliente
      console.error('[forgot-password] Erro interno:', err, { email });
    }
    // Sempre resposta genérica
    return { message: 'Se existir uma conta com este email, enviaremos instruções.' };
  }
  
    @Post('reset-password')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Resetar senha usando token de recuperação' })
    @ApiBody({ type: ResetPasswordDto })
    async resetPassword(@Body() body: ResetPasswordDto) {
      const result = await this.authService.resetPassword(body);
      return result;
    }
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: SignUpDto })
  async signUp(@Body() signUpDto: SignUpDto, @Res() res: Response) {
    console.log('REQ RECEBIDA: POST /auth/signup', signUpDto);
    try {
      const result = await this.authService.signUp(signUpDto);
      return res.status(201).json(result || { success: true });
    } catch (error) {
      console.error('❌ Erro no signup:', error);
      return res.status(400).json({ success: false, message: error.message || 'Erro ao criar conta' });
    }
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login com email e senha' })
  @ApiResponse({
    status: 200,
    description: 'Login realizado com sucesso',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Credenciais inválidas',
  })
  @ApiBody({ type: LoginDto })
  async login(@Request() req, @Res() res: Response) {
    console.log('REQ RECEBIDA: POST /auth/login', req.body);
    try {
      const result = await this.authService.login(req.user);
      console.log('✅ Login service retornou:', result);
      return res.status(200).json(result || { success: true });
    } catch (error) {
      console.error('❌ Erro no login service:', error);
      return res.status(401).json({ success: false, message: error.message || 'Credenciais inválidas' });
    }
  }

  // Endpoint de teste para debug
  @Post('test-login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Teste de login direto (sem guard)' })
  @ApiBody({ type: LoginDto })
  async testLogin(@Body() loginDto: LoginDto): Promise<any> {
    console.log('🧪 Test login chamado com:', loginDto);
    try {
  const user = await this.authService.findUserByEmail(loginDto.email);
      let debugInfo: any = { email: loginDto.email };
      if (!user) {
        debugInfo.found = false;
        return {
          success: false,
          message: 'Usuário não encontrado',
          debug: debugInfo
        };
      }
      debugInfo.found = true;
      debugInfo.userId = user.id;
      debugInfo.status = user.status;
      debugInfo.passwordHash = user.passwordHash;
      debugInfo.senhaEnviada = loginDto.password;
      const isPasswordValid = user.passwordHash ? await this.authService.comparePassword(loginDto.password, user.passwordHash) : false;
      debugInfo.senhaValida = isPasswordValid;
      if (!isPasswordValid) {
        return {
          success: false,
          message: 'Senha inválida',
          debug: debugInfo
        };
      }
      if (user.status !== 'active') {
        return {
          success: false,
          message: 'Usuário não está ativo',
          debug: debugInfo
        };
      }
      const result = await this.authService.login(user);
      return {
        success: true,
        message: 'Login realizado com sucesso',
        data: result,
        debug: debugInfo
      };
    } catch (error) {
      console.error('❌ Erro no test login:', error);
      return {
        success: false,
        message: error.message,
        debug: {
          error: error.message,
          stack: error.stack
        }
      };
    }
  }

  // ROTAS OAUTH DESATIVADAS - USANDO FIREBASE AUTH NO FRONTEND
  /*
  @Get('google')
  @UseGuards(GoogleAuthGuard)
  @ApiOperation({ summary: 'Iniciar login com Google' })
  @ApiResponse({
    status: 302,
    description: 'Redirecionamento para Google OAuth',
  })
  async googleAuth() {
    // Guard redireciona para Google OAuth
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  @ApiOperation({ summary: 'Callback do Google OAuth' })
  @ApiResponse({
    status: 302,
    description: 'Redirecionamento para frontend com token',
  })
  async googleAuthCallback(@Request() req, @Res() res: Response) {
    try {
      const authResult = await this.authService.login(req.user);
      
      // Determinar URL do frontend
      const frontendURL = this.getFrontendURL(req);
      
      // Redirecionar para o frontend com token
      const redirectUrl = `${frontendURL}/auth/callback?token=${authResult.accessToken}&user=${encodeURIComponent(JSON.stringify(authResult.user))}`;
      res.redirect(redirectUrl);
    } catch (error) {
      const frontendURL = this.getFrontendURL(req);
      const redirectUrl = `${frontendURL}/login?error=google_login_failed`;
      res.redirect(redirectUrl);
    }
  }

  private getFrontendURL(req?: any): string {
    // Usar variável de ambiente FRONTEND_URL
    return process.env.FRONTEND_URL || 'https://app-drop-calc.vercel.app';
  }
  */

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obter perfil do usuário autenticado' })
  @ApiResponse({
    status: 200,
    description: 'Perfil do usuário',
  })
  @ApiResponse({
    status: 401,
    description: 'Token inválido ou expirado',
  })
  async getProfile(@Request() req, @Res() res: Response) {
    console.log('REQ RECEBIDA: GET /auth/profile');
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Token inválido ou expirado' });
    }
    return res.status(200).json({ user: req.user, message: 'Perfil carregado com sucesso' });
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Renovar token de acesso' })
  @ApiResponse({
    status: 200,
    description: 'Token renovado com sucesso',
    type: AuthResponseDto,
  })
  async refresh(@Request() req, @Res() res: Response) {
    console.log('REQ RECEBIDA: POST /auth/refresh');
    try {
      const result = await this.authService.refresh(req.user);
      return res.status(200).json(result || { success: true });
    } catch (error) {
      console.error('❌ Erro no refresh:', error);
      return res.status(401).json({ success: false, message: error.message || 'Erro ao renovar token' });
    }
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Logout do usuário' })
  @ApiResponse({
    status: 200,
    description: 'Logout realizado com sucesso',
  })
  async logout(@Request() req, @Res() res: Response) {
  console.log('REQ RECEBIDA: POST /auth/logout');
  return res.status(200).json({ message: 'Logout realizado com sucesso', timestamp: new Date().toISOString(), success: true });
  }

  @Post('create-admin')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Criar usuário administrador (apenas primeira vez)' })
  @ApiResponse({
    status: 200,
    description: 'Administrador criado com sucesso',
  })
  async createAdmin() {
    return this.authService.createAdminUser();
  }
}