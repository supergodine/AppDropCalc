import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Send, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { toast } from 'react-hot-toast';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Por favor, insira seu email');
      return;
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Por favor, insira um email válido');
      return;
    }

    setIsLoading(true);

    try {
      // Chamar endpoint real do backend
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://dropcalc-backend-production.up.railway.app'}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setEmailSent(true);
        toast.success('Email de recuperação enviado com sucesso!');
      } else {
        const data = await response.json();
        toast.error(data.message || 'Erro ao enviar email de recuperação');
      }
    } catch (error) {
      toast.error('Erro ao enviar email de recuperação');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
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
              Email Enviado!
            </h1>
            
            <p className="text-gray-300 mb-6">
              Enviamos um link de recuperação para <strong>{email}</strong>. 
              Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
            </p>
            
            <div className="space-y-4">
              <Button
                onClick={handleBackToLogin}
                variant="outline"
                className="w-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Login
              </Button>
              
              <p className="text-sm text-gray-400">
                Não recebeu o email? Verifique sua pasta de spam ou tente novamente em alguns minutos.
              </p>
              
              {/* Link para demonstração - remover em produção */}
              <div className="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-700">
                <p className="text-xs text-blue-300 mb-2">
                  <strong>Demonstração:</strong> Clique no link abaixo para simular o acesso via email
                </p>
                <button
                  onClick={() => navigate('/reset-password?token=demo-token-123')}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm underline"
                >
                  Redefinir Senha (Demo)
                </button>
              </div>
            </div>
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
              <Mail className="w-12 h-12 text-blue-400 mx-auto" />
            </motion.div>
            
            <h1 className="text-2xl font-bold text-white mb-2">
              Esqueci a Senha
            </h1>
            
            <p className="text-gray-300">
              Digite seu email para receber um link de recuperação de senha
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || !email}
              className="w-full"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              {isLoading ? 'Enviando...' : 'Enviar Link de Recuperação'}
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

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Lembrou da senha?{' '}
              <button
                onClick={handleBackToLogin}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Faça login aqui
              </button>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;