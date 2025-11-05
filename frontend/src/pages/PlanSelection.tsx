import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Star } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';

const PlanSelection: React.FC = () => {
  const navigate = useNavigate();
  const { updatePlan, user, plan, isAuthenticated, loading } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'professional' | 'premium'>('basic');

  // Debug info - sempre loggar o estado
  console.log('🎯 PlanSelection - Debug Info:');
  console.log('  - Loading:', loading);
  console.log('  - IsAuthenticated:', isAuthenticated);
  console.log('  - User:', user);
  console.log('  - Plan:', plan);

  // Verificar se usuário está logado
  React.useEffect(() => {
    console.log('🔄 PlanSelection useEffect - Auth check');
    console.log('  - Loading:', loading, 'IsAuthenticated:', isAuthenticated);
    
    if (!loading && !isAuthenticated) {
      console.log('❌ Not authenticated, redirecting to login');
      toast.error('Você precisa estar logado para escolher um plano');
      navigate('/login');
      return;
    }
    
    if (!loading && isAuthenticated) {
      console.log('✅ User is authenticated, can choose plan');
    }
  }, [isAuthenticated, loading, navigate]);

  // Se usuário já tem plano ativo, redirecionar para dashboard
  React.useEffect(() => {
    console.log('🔄 PlanSelection useEffect - Plan check');
    console.log('  - Plan exists:', !!plan);
    console.log('  - Plan type:', plan?.type);
    console.log('  - Plan active:', plan?.active);
    
    if (plan && plan.type && plan.active) {
      console.log('✅ User already has active plan, redirecting to dashboard');
      navigate('/dashboard');
    }
  }, [plan, navigate]);

  // Loading state
  if (loading) {
    console.log('⏳ PlanSelection - Showing loading state');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  // Se não está autenticado após loading, não renderizar nada (useEffect vai redirecionar)
  if (!isAuthenticated) {
    console.log('❌ PlanSelection - Not authenticated, should redirect');
    return null;
  }

  console.log('🎨 PlanSelection - Rendering plan selection interface');

  const plans = [
    {
      id: 'basic' as const,
      name: 'Gratuito',
      price: 0,
      period: '',
      icon: Zap,
      color: 'from-gray-400 to-gray-600',
      features: [
        'Calculadora básica de preços',
        'Taxas de plataformas principais',
        'Conversão de moedas em tempo real',
        'Sem histórico de cálculos',
        'Suporte básico'
      ],
      limitations: [
        'Não salva histórico',
        'Sem relatórios',
        'Funcionalidades limitadas'
      ]
    },
    {
      id: 'professional' as const,
      name: 'Gold',
      price: 29.90,
      period: '/mês',
      icon: Star,
      color: 'from-yellow-400 to-yellow-600',
      popular: true,
      features: [
        'Tudo do plano Gratuito',
        'Histórico completo de cálculos',
        'Relatórios detalhados',
        'Exportação para Excel/PDF',
        'Análise de margem de lucro',
        'Suporte prioritário',
        'Até 1000 cálculos/mês'
      ]
    },
    {
      id: 'premium' as const,
      name: 'Premium',
      price: 49.90,
      period: '/mês',
      icon: Crown,
      color: 'from-purple-400 to-purple-600',
      features: [
        'Tudo do plano Gold',
        'Cálculos ilimitados',
        'API para integração',
        'Dashboards avançados',
        'Alertas personalizados',
        'Suporte 24/7',
        'Consultoria de precificação',
        'Recursos beta antecipados'
      ]
    }
  ];

  const handleSelectPlan = (planId: 'basic' | 'professional' | 'premium') => {
    setSelectedPlan(planId);
  };

  const handleConfirmPlan = () => {
    const plan = plans.find(p => p.id === selectedPlan);
    if (!plan) return;

    // Atualizar o plano do usuário
    updatePlan({
      type: selectedPlan,
      name: plan.name,
      price: plan.price,
      active: true
    });

    // Salvar informações adicionais
    localStorage.setItem('subscriptionDate', new Date().toISOString());
    localStorage.setItem('billingStatus', 'active');

    toast.success(`Plano ${plan.name} selecionado com sucesso!`);
    
    // Redirecionar para dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Escolha seu plano
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Selecione o plano que melhor atende às suas necessidades
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  isSelected ? 'border-blue-500 ring-4 ring-blue-100' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleSelectPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-900">
                      {plan.price === 0 ? 'Grátis' : `R$ ${plan.price}`}
                      {plan.period && <span className="text-lg text-gray-500">{plan.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Limitações:</h4>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {limitation}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={handleConfirmPlan}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Confirmar Plano {plans.find(p => p.id === selectedPlan)?.name}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;