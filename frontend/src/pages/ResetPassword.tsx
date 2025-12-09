import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { toast } from 'react-hot-toast';
import { authApi } from '@/services/api';

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState(true);
  const [passwordReset, setPasswordReset] = useState(false);

  const token = searchParams.get('token');

  useEffect(() => {
    // Não fazer qualquer requisição à API na montagem.
    // Apenas marcar token como inválido se o parâmetro estiver ausente.
    console.log('ResetPassword mounted, token=', token);
    if (!token) {
      setIsValidToken(false);
    }
  }, [token]);

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return 'A senha deve ter pelo menos 8 caracteres';
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return 'A senha deve conter pelo menos uma letra minúscula';
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return 'A senha deve conter pelo menos uma letra maiúscula';
    }
    if (!/(?=.*\d)/.test(password)) {
      return 'A senha deve conter pelo menos um número';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password || !confirmPassword) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    setIsLoading(true);

    try {
      if (!token) {
        throw new Error('Token ausente');
      }

      const result = await authApi.resetPassword(token, password);
      setPasswordReset(true);
      toast.success(result?.message || 'Senha redefinida com sucesso!');
    } catch (error: any) {
      console.error('ResetPassword submit error:', error?.response?.data || error);
      const status = error?.response?.status;
      const msg = error?.response?.data?.message || error?.message || 'Erro ao redefinir senha. Tente novamente';
      // Se o backend retornar 400 ou 404, considerar token inválido/expirado
      if (status === 400 || status === 404) {
        setIsValidToken(false);
        console.warn('ResetPassword: backend returned status indicating invalid token:', status, msg);
      } else {
        toast.error(msg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  if (!isValidToken) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card className="p-8 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Token Inválido
            </h1>
            
            <p className="text-gray-300 mb-6">
              O link de recuperação é inválido ou expirou. 
              Por favor, solicite um novo link de recuperação.
            </p>
            
            <div className="space-y-4">
              <Button
                onClick={() => navigate('/forgot-password')}
                className="w-full"
              >
                Solicitar Novo Link
              </Button>
              
              <Button
                onClick={handleBackToLogin}
                variant="outline"
                className="w-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Login
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  if (passwordReset) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            </motion.div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Senha Redefinida!
            </h1>
            
            <p className="text-gray-300 mb-6">
              Sua senha foi redefinida com sucesso. 
              Agora você pode fazer login com sua nova senha.
            </p>
            
            <Button
              onClick={handleBackToLogin}
              className="w-full"
            >
              Fazer Login
            </Button>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="p-8">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-4"
            >
              <Lock className="w-12 h-12 text-blue-400 mx-auto" />
            </motion.div>
            
            <h1 className="text-2xl font-bold text-white mb-2">
              Redefinir Senha
            </h1>
            
            <p className="text-gray-300">
              Digite sua nova senha
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nova senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="w-full pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              {password && (
                <div className="mt-2 space-y-1 text-xs">
                  <div className={`flex items-center ${password.length >= 8 ? 'text-green-400' : 'text-red-400'}`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${password.length >= 8 ? 'bg-green-400' : 'bg-red-400'}`} />
                    Pelo menos 8 caracteres
                  </div>
                  <div className={`flex items-center ${/(?=.*[a-z])/.test(password) ? 'text-green-400' : 'text-red-400'}`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${/(?=.*[a-z])/.test(password) ? 'bg-green-400' : 'bg-red-400'}`} />
                    Uma letra minúscula
                  </div>
                  <div className={`flex items-center ${/(?=.*[A-Z])/.test(password) ? 'text-green-400' : 'text-red-400'}`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${/(?=.*[A-Z])/.test(password) ? 'bg-green-400' : 'bg-red-400'}`} />
                    Uma letra maiúscula
                  </div>
                  <div className={`flex items-center ${/(?=.*\d)/.test(password) ? 'text-green-400' : 'text-red-400'}`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${/(?=.*\d)/.test(password) ? 'bg-green-400' : 'bg-red-400'}`} />
                    Um número
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmar nova senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                  className="w-full pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              {confirmPassword && (
                <div className="mt-2 text-xs">
                  <div className={`flex items-center ${password === confirmPassword ? 'text-green-400' : 'text-red-400'}`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${password === confirmPassword ? 'bg-green-400' : 'bg-red-400'}`} />
                    {password === confirmPassword ? 'Senhas coincidem' : 'Senhas não coincidem'}
                  </div>
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading || !password || !confirmPassword || password !== confirmPassword}
              className="w-full"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                />
              ) : (
                <Lock className="w-4 h-4 mr-2" />
              )}
              {isLoading ? 'Redefinindo...' : 'Redefinir Senha'}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleBackToLogin}
              className="w-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Login
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default ResetPassword;