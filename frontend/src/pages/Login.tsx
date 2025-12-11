import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, UserPlus, Eye, EyeOff } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authService } from '@/lib/auth';
import { useAuth } from '@/hooks/useAuth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { refreshAuth } = useAuth();

  console.log('=== LOGIN PAGE CARREGANDO ===');
  console.log('isLogin:', isLogin);
  console.log('searchParams mode:', searchParams.get('mode'));
  console.log('authService.isAuthenticated():', authService.isAuthenticated());

  useEffect(() => {
    console.log('useEffect Login executando...');
    
    // Verificar resultado de redirecionamento Google
    const checkGoogleRedirect = async () => {
      try {
        const user = await authService.handleGoogleRedirectResult();
        if (user) {
          console.log('✅ Login Google por redirect:', user);
          toast.success(`Bem-vindo, ${user.name}! 🎉`);
          // Atualizar estado global de auth antes de navegar
          try {
            refreshAuth();
          } catch (e) {
            console.warn('⚠️ refreshAuth falhou após redirect:', e);
          }
          navigate('/dashboard');
          return;
        }
      } catch (error) {
        console.error('❌ Erro no redirect Google:', error);
        toast.error('Erro ao processar login Google');
      }
    };
    
    checkGoogleRedirect();
    
    // Check if came from "Create account" button first
    const mode = searchParams.get('mode');
    console.log('Mode detectado:', mode);
    
    if (mode === 'signup') {
      console.log('Modo signup detectado, setando isLogin = false');
      setIsLogin(false);
      return;
    }
    
    // REMOVIDO redirecionamento automático - usuário deve fazer login manual
    console.log('Login carregado - usuário deve fazer login manualmente');
  }, [navigate, searchParams]);

  const validateForm = () => {
    if (!email || !password || (!isLogin && !name)) {
      toast.error('Por favor, preencha todos os campos');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Por favor, insira um e-mail válido');
      return false;
    }

    if (password.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres');
      return false;
    }

    if (!isLogin && name.length < 2) {
      toast.error('O nome deve ter pelo menos 2 caracteres');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      if (isLogin) {
        // LOGIN: tentar método principal primeiro, depois alternativo
        let loginSuccess = false;
        let user = null;
        
        try {
          console.log('🔄 Tentando login principal...');
          user = await authService.login(email, password);
          loginSuccess = true;
        } catch (primaryError: any) {
          console.log('❌ Login principal falhou:', primaryError.message);
          console.log('🔄 Tentando método alternativo...');
          
          try {
            user = await authService.loginAlternative(email, password);
            loginSuccess = true;
            console.log('✅ Login alternativo funcionou!');
          } catch (alternativeError: any) {
            console.error('❌ Login alternativo também falhou:', alternativeError.message);
            throw alternativeError;
          }
        }
        
        if (loginSuccess && user) {
          // Use backend-provided plan (authService.login already saved userPlan when present)
          // Atualizar estado de autenticação
          refreshAuth();
          toast.success('Login realizado com sucesso!');
          navigate('/dashboard');
        }
      } else {
        await authService.register(name, email, password);
        toast.success('Conta criada com sucesso!');
        
        // After register, authService.register will create the user; refresh auth to sync
        refreshAuth();
        navigate('/dashboard');
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      
      // Mensagens de erro da API
      const message = error.message || 'Erro inesperado. Tente novamente';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (loading) return;
    
    setLoading(true);
    const loadingToast = toast.loading('Conectando com Google...');
    
    try {
      console.log('🚀 Iniciando login Google Firebase...');
      
      const user = await authService.loginWithGoogle();
      
      toast.dismiss(loadingToast);
      toast.success(`Bem-vindo, ${user.name}! 🎉`);
      
      console.log('✅ Login Google realizado:', user);
        // Atualizar estado global de auth antes de navegar
        try {
          refreshAuth();
        } catch (e) {
          console.warn('⚠️ refreshAuth falhou após loginWithGoogle:', e);
        }

        // Redirecionar para dashboard
        navigate('/dashboard');
      
    } catch (error: any) {
      console.error('❌ Erro no login Google:', error);
      
      toast.dismiss(loadingToast);
      
      let errorMessage = 'Erro ao fazer login com Google';
      
      if (error.message?.includes('popup-closed-by-user')) {
        errorMessage = 'Login cancelado pelo usuário';
      } else if (error.message?.includes('popup-blocked')) {
        errorMessage = 'Popup bloqueado. Permita popups para este site';
      } else if (error.message?.includes('network')) {
        errorMessage = 'Erro de conexão. Verifique sua internet';
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  console.log('=== RENDERIZANDO LOGIN PAGE ===');
  console.log('Estado atual: isLogin =', isLogin, 'loading =', loading);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"
        ></motion.div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo/Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 10 }}
            className="w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <span className="text-3xl">💰</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold text-white mb-3"
          >
            DropCalc
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg mb-2"
          >
            {isLogin ? 'Bem-vindo de volta' : 'Crie sua conta gratuitamente'}
          </motion.p>
          {!isLogin && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-sm"
            >
              Após criar sua conta, você poderá escolher o plano ideal
            </motion.p>
          )}
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field - Only for registration */}
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-3">
                  Nome
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <UserPlus className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Seu nome completo"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-3">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-3">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? (
                    <LogIn className="h-5 w-5" />
                  ) : (
                    <UserPlus className="h-5 w-5" />
                  )}
                  <span>{isLogin ? 'Entrar' : 'Criar Conta'}</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Google Login Button */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-gray-300">ou</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed border border-gray-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continuar com Google</span>
            </motion.button>
          </div>

          {/* Forgot Password Link - Only show in login mode */}
          {isLogin && (
            <div className="mt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm"
              >
                Esqueci a senha
              </motion.button>
            </div>
          )}

          {/* Toggle Mode */}
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">
              {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-400 hover:text-purple-300 font-semibold transition-colors text-lg bg-white/5 px-6 py-2 rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm"
            >
              {isLogin ? 'Criar conta' : 'Entrar na minha conta'}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;