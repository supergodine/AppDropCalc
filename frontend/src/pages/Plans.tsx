import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Shield, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authService, UserPlan } from '@/lib/auth';

interface Plan {
  id: 'basic' | 'professional' | 'premium';
  name: string;
  price: number;
  color: string;
  icon: React.ReactNode;
  features: string[];
  limitations: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Básico',
    price: 0,
    color: 'green',
    icon: <Shield className="h-6 w-6" />,
    features: [
      'Cálculos manuais',
      'Suporte para 1 moeda',
      'Salvamento local',
      'Interface básica'
    ],
    limitations: [
      'Sem integração com APIs',
      'Sem cálculo automático',
      'Limitado a USD/BRL'
    ]
  },
  {
    id: 'professional',
    name: 'Profissional',
    price: 19.90,
    color: 'blue',
    icon: <Zap className="h-6 w-6" />,
    features: [
      'Cálculo automático com APIs',
      'Suporte para até 3 moedas',
      'Taxa de câmbio em tempo real',
      'Histórico de cálculos',
      'Suporte por email'
    ],
    limitations: [
      'Limitado a 3 moedas',
      'Sem integração com todas as plataformas'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 39.90,
    color: 'purple',
    icon: <Crown className="h-6 w-6" />,
    features: [
      'Tudo liberado',
      'Todas as moedas disponíveis',
      'Integração com todas as plataformas',
      'Relatórios avançados',
      'API própria',
      'Suporte prioritário',
      'Análises de mercado'
    ],
    limitations: []
  }
];

const CheckoutModal: React.FC<{
  plan: Plan;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}> = ({ plan, isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-6 w-full max-w-md"
      >
        <div className="text-center">
          <div className={`w-16 h-16 rounded-full bg-${plan.color}-100 flex items-center justify-center mx-auto mb-4`}>
            {plan.icon}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Confirmar Assinatura
          </h3>
          
          <p className="text-gray-600 mb-6">
            Você está prestes a assinar o plano <strong>{plan.name}</strong>
            {plan.price > 0 && (
              <span> por <strong>R$ {plan.price.toFixed(2)}/mês</strong></span>
            )}
          </p>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 px-4 py-2 bg-${plan.color}-600 text-white rounded-xl hover:bg-${plan.color}-700 transition-colors`}
            >
              {plan.price > 0 ? 'Assinar' : 'Ativar'}
            </button>
          </div>

          {plan.price > 0 && (
            <p className="text-xs text-gray-500 mt-3">
              * Esta é uma simulação. Nenhuma cobrança real será feita.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Plans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const navigate = useNavigate();
  const currentPlan = authService.getUserPlan();

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowCheckout(true);
  };

  const handleConfirmPlan = () => {
    if (!selectedPlan) return;

    const newPlan: UserPlan = {
      type: selectedPlan.id,
      name: selectedPlan.name,
      price: selectedPlan.price,
      active: true,
      expiresAt: selectedPlan.price > 0 ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) : undefined // 30 days
    };

    authService.updateUserPlan(newPlan);
    
    toast.success(
      selectedPlan.price > 0 
        ? `Plano ${selectedPlan.name} ativado com sucesso!`
        : `Bem-vindo ao DropCalc!`
    );

    setShowCheckout(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Escolha seu Plano
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-8"
          >
            Selecione o plano perfeito para suas necessidades de dropshipping
          </motion.p>
          
          {currentPlan && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
            >
              Plano atual: {currentPlan.name}
            </motion.div>
          )}
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`
                relative bg-white rounded-2xl shadow-lg border-2 p-8 h-full
                ${plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'}
                ${currentPlan?.type === plan.id ? 'ring-2 ring-green-500' : ''}
                transition-all duration-200 hover:shadow-xl
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Current Plan Badge */}
              {currentPlan?.type === plan.id && (
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Atual
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-${plan.color}-100 text-${plan.color}-600 flex items-center justify-center mx-auto mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900">
                  {plan.price === 0 ? (
                    'Grátis'
                  ) : (
                    <>
                      <span className="text-lg text-gray-600">R$</span>
                      {plan.price.toFixed(2)}
                      <span className="text-lg text-gray-600">/mês</span>
                    </>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">Recursos inclusos:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-900 mt-6">Limitações:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-center">
                          <X className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectPlan(plan)}
                disabled={currentPlan?.type === plan.id}
                className={`
                  w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200
                  ${currentPlan?.type === plan.id
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                  }
                `}
              >
                {currentPlan?.type === plan.id ? 'Plano Atual' : 'Assinar'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">
            Não tem certeza? Comece com o plano Básico e faça upgrade quando quiser.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Ir para o Dashboard →
          </button>
        </motion.div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        plan={selectedPlan!}
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        onConfirm={handleConfirmPlan}
      />
    </div>
  );
};

export default Plans;