import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const LoginAlternativo: React.FC = () => {
  const [email, setEmail] = useState('test@teste.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://appdropcalc-production.up.railway.app';

  console.log('🔥 LOGIN ALTERNATIVO - API_BASE_URL:', API_BASE_URL);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      toast.loading('Tentando login...');
      
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success('Login realizado com sucesso!');
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Redirecionar para dashboard
        window.location.href = '/dashboard';
      } else {
        toast.error(data.message || 'Erro no login');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(`Erro de conexão: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testBackendConnection = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/`);
      const text = await response.text();
      toast.success(`Backend conectado: ${text}`);
    } catch (error: any) {
      toast.error(`Erro de conexão: ${error.message}`);
    }
  };

  const createTestUser = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Usuário Teste',
          email: 'test@teste.com',
          password: '123456'
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success('Usuário teste criado com sucesso!');
      } else {
        toast.error(data.message || 'Erro ao criar usuário');
      }
    } catch (error: any) {
      toast.error(`Erro: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">🔧 Login Alternativo</h1>
        
        <div className="mb-6">
          <p className="text-white/80 text-sm mb-4">API: <code className="bg-black/30 px-2 py-1 rounded text-green-300">{API_BASE_URL}</code></p>
          
          <div className="flex gap-2 mb-4">
            <button
              onClick={testBackendConnection}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors"
            >
              ✅ Testar Conexão
            </button>
            
            <button
              onClick={createTestUser}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm transition-colors"
            >
              👤 Criar User Teste
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="sua senha"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            {loading ? '🔄 Entrando...' : '🚀 Entrar'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-white/60 text-sm text-center mb-3">Outros testes:</p>
          
          <div className="flex gap-2">
            <a 
              href="/login" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors text-center"
            >
              🔐 Login OAuth
            </a>
            
            <a 
              href="/debug" 
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors text-center"
            >
              🔧 Debug
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAlternativo;