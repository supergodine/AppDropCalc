import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Check, ArrowLeft } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Básico',
    price: 0,
    features: [
      'Calculadora básica',
      'Até 10 cálculos por dia',
      'Suporte por email'
    ]
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 29.90,
    features: [
      'Calculadora avançada',
      'Cálculos ilimitados',
      'Análise de margem',
      'Suporte prioritário',
      'Relatórios mensais'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 49.90,
    features: [
      'Todos os recursos Gold',
      'API de integração',
      'Suporte 24/7',
      'Relatórios personalizados',
      'Consultoria especializada'
    ]
  }
];

const PlanSelection: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      console.log('❌ Usuário não autenticado, redirecionando para login');
      navigate('/login');
      return;
    }

    console.log('✅ Usuário autenticado na seleção de planos:', user);
  }, [isAuthenticated, user, navigate]);

  const handleSelectPlan = async (planId: string) => {
    setLoading(true);
    try {
      // Aqui você pode adicionar lógica para salvar o plano selecionado
      console.log('Plano selecionado:', planId);
      setSelectedPlan(planId);
      
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirecionar para o dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao selecionar plano:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return null; // Ou um loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="mr-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold">Escolha seu Plano</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : 'border-gray-600 hover:border-blue-400'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <Crown className={`w-12 h-12 mx-auto mb-4 ${
                  plan.id === 'premium' ? 'text-yellow-400' : 
                  plan.id === 'gold' ? 'text-yellow-300' : 
                  'text-gray-400'
                }`} />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold">
                  {plan.price === 0 ? (
                    'Grátis'
                  ) : (
                    <>
                      R$ <span className="text-4xl">{plan.price}</span>
                      <span className="text-lg text-gray-300">/mês</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(plan.id)}
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading ? 'Processando...' : selectedPlan === plan.id ? 'Selecionado' : 'Escolher Plano'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-300">
          <p>Todos os planos incluem garantia de 30 dias</p>
          <p className="text-sm mt-2">Cancele a qualquer momento</p>
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;
