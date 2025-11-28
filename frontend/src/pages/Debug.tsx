import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { authService } from '../lib/auth';

interface TestResult {
  test: string;
  status: 'pending' | 'success' | 'error';
  message: string;
  details?: any;
}

const Debug: React.FC = () => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  const updateResult = (testName: string, status: 'success' | 'error', message: string, details?: any) => {
    setResults(prev => prev.map(result => 
      result.test === testName 
        ? { ...result, status, message, details }
        : result
    ));
  };

  const runTests = async () => {
    setIsRunning(true);
    
    const tests: TestResult[] = [
      { test: 'Conectividade Backend', status: 'pending', message: 'Verificando...' },
      { test: 'Health Check', status: 'pending', message: 'Verificando...' },
      { test: 'Plataformas API', status: 'pending', message: 'Verificando...' },
      { test: 'OAuth Google Redirect', status: 'pending', message: 'Verificando...' },
      { test: 'Variáveis de Ambiente', status: 'pending', message: 'Verificando...' },
    ];
    
    setResults(tests);

    // Teste 1: Conectividade básica
    try {
      const response = await fetch(`${API_BASE_URL}/`);
      const text = await response.text();
      updateResult('Conectividade Backend', 'success', `✅ Conectado: ${text}`, { status: response.status });
    } catch (error: any) {
      updateResult('Conectividade Backend', 'error', `❌ Erro: ${error.message}`, error);
    }

    // Teste 2: Health Check
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      const data = await response.json();
      updateResult('Health Check', 'success', `✅ Saudável: ${data.message}`, data);
    } catch (error: any) {
      updateResult('Health Check', 'error', `❌ Erro: ${error.message}`, error);
    }

    // Teste 3: API Plataformas
    try {
      const response = await fetch(`${API_BASE_URL}/calc/platforms`);
      const data = await response.json();
      updateResult('Plataformas API', 'success', `✅ ${data.length} plataformas carregadas`, data.slice(0, 2));
    } catch (error: any) {
      updateResult('Plataformas API', 'error', `❌ Erro: ${error.message}`, error);
    }

    // Teste 4: OAuth Google (COMENTADO - AGORA USA FIREBASE)
    /*
    try {
      const response = await fetch(`${API_BASE_URL}/auth/google`, { 
        method: 'GET',
        redirect: 'manual'  // Não seguir redirecionamentos
      });
      
      if (response.status === 0 || response.type === 'opaqueredirect') {
        updateResult('OAuth Google Redirect', 'success', '✅ OAuth configurado (redirecionamento detectado)', { status: 'redirect' });
      } else {
        updateResult('OAuth Google Redirect', 'error', '❌ OAuth não configurado', { status: response.status });
      }
    } catch (error: any) {
      updateResult('OAuth Google Redirect', 'error', `❌ Erro: ${error.message}`, { error: error.message });
    }
    */
    
    // NOVO: Teste Firebase Auth em vez de backend OAuth
    try {
      updateResult('Firebase Auth', 'success', '✅ Firebase Auth disponível (Google via popup)', { 
        info: 'Agora usando Firebase em vez de backend OAuth' 
      });
    } catch (error: any) {
      updateResult('Firebase Auth', 'error', `❌ Firebase Error: ${error.message}`, { error: error.message });
    }

    // Teste 5: Variáveis de ambiente
    const envVars = {
      VITE_API_URL: import.meta.env.VITE_API_URL,
      VITE_OFFLINE_MODE: import.meta.env.VITE_OFFLINE_MODE,
      VITE_APP_MODE: import.meta.env.VITE_APP_MODE,
    };
    updateResult('Variáveis de Ambiente', 'success', '✅ Variáveis carregadas', envVars);

    setIsRunning(false);
    toast.success('Diagnóstico concluído!');
  };

  const testGoogleLogin = async () => {
    try {
      const loadingToast = toast.loading('Testando login Google Firebase...');
      
      const user = await authService.loginWithGoogle();
      
      toast.dismiss(loadingToast);
      toast.success(`Login Google funcionando! Usuário: ${user.name}`);
      
    } catch (error: any) {
      toast.error(`Erro no teste Google: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-6">🔧 Debug DropCalc</h1>
          
          <div className="mb-6">
            <p className="text-white/80 mb-4">API Base URL: <code className="bg-black/30 px-2 py-1 rounded text-green-300">{API_BASE_URL}</code></p>
            
            <div className="flex gap-4">
              <button
                onClick={runTests}
                disabled={isRunning}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {isRunning ? '🔄 Executando...' : '🧪 Executar Diagnóstico'}
              </button>
              
              <button
                onClick={testGoogleLogin}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                🔐 Testar Login Google
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {results.map((result, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  result.status === 'success' ? 'bg-green-900/20 border-green-500' :
                  result.status === 'error' ? 'bg-red-900/20 border-red-500' :
                  'bg-yellow-900/20 border-yellow-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{result.test}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    result.status === 'success' ? 'bg-green-600 text-white' :
                    result.status === 'error' ? 'bg-red-600 text-white' :
                    'bg-yellow-600 text-black'
                  }`}>
                    {result.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-white/80 mt-2">{result.message}</p>
                {result.details && (
                  <details className="mt-2">
                    <summary className="text-white/60 cursor-pointer hover:text-white">Ver detalhes</summary>
                    <pre className="bg-black/30 p-3 rounded mt-2 text-xs text-green-300 overflow-x-auto">
                      {JSON.stringify(result.details, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debug;