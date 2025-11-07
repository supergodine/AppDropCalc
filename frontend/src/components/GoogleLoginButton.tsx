import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { authService } from '../lib/auth';

interface GoogleLoginButtonProps {
  onSuccess?: (user: any) => void;
  onError?: (error: Error) => void;
  className?: string;
  disabled?: boolean;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  onSuccess,
  onError,
  className = '',
  disabled = false
}) => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    if (disabled || loading) return;
    
    setLoading(true);
    const loadingToast = toast.loading('Conectando com Google...');

    try {
      console.log('🚀 Iniciando processo de login Google...');
      
      const user = await authService.loginWithGoogle();
      
      toast.dismiss(loadingToast);
      toast.success(`Bem-vindo, ${user.name}! 🎉`);
      
      if (onSuccess) {
        onSuccess(user);
      }
      
    } catch (error: any) {
      console.error('❌ Erro no login Google:', error);
      
      toast.dismiss(loadingToast);
      
      // Mensagens de erro mais amigáveis
      let errorMessage = 'Erro ao fazer login com Google';
      
      if (error.message?.includes('popup-closed-by-user')) {
        errorMessage = 'Login cancelado pelo usuário';
      } else if (error.message?.includes('popup-blocked')) {
        errorMessage = 'Popup bloqueado. Permita popups para este site';
      } else if (error.message?.includes('network')) {
        errorMessage = 'Erro de conexão. Verifique sua internet';
      }
      
      toast.error(errorMessage);
      
      if (onError) {
        onError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const defaultClasses = `
    flex items-center justify-center gap-3 
    w-full px-4 py-3 
    bg-white text-gray-700 
    border border-gray-300 
    rounded-lg font-medium 
    hover:bg-gray-50 hover:border-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    ${loading ? 'cursor-wait' : 'cursor-pointer'}
  `;

  return (
    <button
      onClick={handleGoogleLogin}
      disabled={disabled || loading}
      className={`${defaultClasses} ${className}`}
      type="button"
    >
      {loading ? (
        <>
          <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
          <span>Conectando...</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Continuar com Google</span>
        </>
      )}
    </button>
  );
};

export default GoogleLoginButton;