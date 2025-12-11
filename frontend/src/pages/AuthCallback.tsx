import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      const token = searchParams.get('token');
      const userStr = searchParams.get('user');
      const error = searchParams.get('error');

      if (error) {
        toast.error('Erro no login com Google. Tente novamente.');
        navigate('/login');
        return;
      }

      if (token && userStr) {
        try {
          // Decodificar dados do usuário
          const user = JSON.parse(decodeURIComponent(userStr));
          
          // Salvar token e dados do usuário
          localStorage.setItem('accessToken', token);
          localStorage.setItem('currentUser', JSON.stringify(user));
          
          // Definir premium como ativo para testes (salvar objeto estruturado)
          localStorage.setItem('premiumActive', 'true');
          localStorage.setItem('userPlan', JSON.stringify({ type: 'premium', name: 'Premium', price: 19.9, active: true }));
          localStorage.setItem('billingStatus', 'active');
          
          toast.success('Login com Google realizado com sucesso!');
          navigate('/dashboard');
        } catch (error) {
          console.error('Erro ao processar callback:', error);
          toast.error('Erro ao processar login. Tente novamente.');
          navigate('/login');
        }
      } else {
        toast.error('Dados de login inválidos.');
        navigate('/login');
      }
    };

    handleCallback();
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Processando login com Google...</p>
      </div>
    </div>
  );
};

export default AuthCallback;