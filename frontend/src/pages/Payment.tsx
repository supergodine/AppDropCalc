import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Shield,
  Star,
  Check,
  Gem,
  Zap,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { createPaymentPreference } from '../services/mercadoPago';
import { useAuth } from '../hooks/useAuth';

// Tipagem dos planos
interface Plan {
  id: 'basic' | 'gold' | 'premium';
  name: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  popular?: boolean;
  features: string[];
  prices: {
    monthly: number;
    quarterly: { total: number; perMonth: number };
    annual: { total: number; perMonth: number };
  };
}

const Payment: React.FC = () => {
  const { user } = useAuth();

  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'quarterly' | 'annual'>('monthly');
  const [billingState, setBillingState] = useState({
    isConnected: false,
    isLoading: true,
    products: null,
  });
  const [currentPlan, setCurrentPlan] = useState<string | null>(null);
  const [isPurchasing, setIsPurchasing] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Básico',
      icon: <Check className="w-8 h-8 text-gray-500" />,
      color: 'gray',
      gradient: 'from-gray-400 to-gray-600',
      features: [
        'Cálculos básicos',
        'Limite de 10 cálculos/mês',
        'Suporte por e-mail'
      ],
      prices: {
        monthly: 4.9,
        quarterly: { total: 12.9, perMonth: 4.3 },
        annual: { total: 39.9, perMonth: 3.3 }
      }
    },
    {
      id: 'gold',
      name: 'Gold',
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      color: 'yellow',
      gradient: 'from-yellow-400 to-yellow-600',
      popular: true,
      features: [
        'Cálculos ilimitados',
        'Integração Google Play',
        'Suporte por e-mail'
      ],
      prices: {
        monthly: 9.9,
        quarterly: { total: 26.9, perMonth: 9.0 },
        annual: { total: 89.9, perMonth: 7.5 }
      }
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: <Gem className="w-8 h-8 text-purple-500" />,
      color: 'purple',
      gradient: 'from-purple-400 to-purple-600',
      features: [
        'Cálculos ilimitados',
        'Integração Google Play',
        'Histórico de preços',
        'Suporte prioritário'
      ],
      prices: {
        monthly: 19.9,
        quarterly: { total: 54.9, perMonth: 18.3 },
        annual: { total: 199.9, perMonth: 16.6 }
      }
    }
  ];

  const getPriceByPeriod = (plan: Plan, period: 'monthly' | 'quarterly' | 'annual') => {
    switch (period) {
      case 'monthly':
        return { value: plan.prices.monthly, label: `R$ ${plan.prices.monthly.toFixed(2)}` };
      case 'quarterly':
        return { value: plan.prices.quarterly.total, label: `R$ ${plan.prices.quarterly.total.toFixed(2)} (R$ ${plan.prices.quarterly.perMonth.toFixed(2)}/mês)` };
      case 'annual':
        return { value: plan.prices.annual.total, label: `R$ ${plan.prices.annual.total.toFixed(2)} (R$ ${plan.prices.annual.perMonth.toFixed(2)}/mês)` };
    }
  };

  const getSavingsPercentage = (plan: Plan, period: 'quarterly' | 'annual') => {
    const monthlyCost = plan.prices.monthly * (period === 'quarterly' ? 3 : 12);
    const total = plan.prices[period].total;
    return Math.round(((monthlyCost - total) / monthlyCost) * 100);
  };

  useEffect(() => {
    const userPlan = localStorage.getItem('userPlan');
    const billingStatus = localStorage.getItem('billingStatus');
    const currentUser = localStorage.getItem('currentUser');

    if (userPlan && billingStatus === 'active' && currentUser) {
      const subscriptionDate = localStorage.getItem('subscriptionDate');
      if (subscriptionDate) {
        const planDate = new Date(subscriptionDate);
        const now = new Date();
        const hoursDiff = (now.getTime() - planDate.getTime()) / (1000 * 60 * 60);
        if (hoursDiff < 24) {
          setCurrentPlan(userPlan);
        } else {
          localStorage.removeItem('userPlan');
          localStorage.removeItem('billingStatus');
          localStorage.removeItem('subscriptionPeriod');
          localStorage.removeItem('subscriptionDate');
        }
      }
    }

    setBillingState({ isConnected: true, isLoading: false, products: null });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Seletor de período */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Período de Cobrança</h3>
          <div className="grid grid-cols-3 gap-3">
            {(['monthly', 'quarterly', 'annual'] as const).map((period) => {
              const labels = {
                monthly: 'Mensal',
                quarterly: 'Trimestral',
                annual: 'Anual'
              };

              return (
                <motion.button
                  key={period}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPeriod(period)}
                  className={`p-3 rounded-xl border-2 transition-all relative ${
                    selectedPeriod === period
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <p className="font-medium text-gray-800">{labels[period]}</p>
                  {period !== 'monthly' && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      -{getSavingsPercentage(plans[1], period)}%
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid de planos */}
        {!billingState.isLoading && (
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {plans.map((plan, index) => {
              const isCurrentPlan = currentPlan === plan.id;
              const purchaseKey = `${plan.id}_${selectedPeriod}`;
              const isPurchasingThis = isPurchasing === purchaseKey;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 border shadow-xl transition-all duration-300 ${
                    plan.popular
                      ? 'border-yellow-300 shadow-2xl transform scale-105'
                      : 'border-white/20 hover:shadow-2xl hover:scale-102'
                  } ${isCurrentPlan ? 'ring-2 ring-green-500' : ''}`}
                >
                  {/* Nome, ícone e preço do plano */}
                  <div className="flex items-center gap-3 mb-4">
                    {plan.icon}
                    <span className={`text-xl font-bold text-${plan.color}-700`}>{plan.name}</span>
                  </div>
                  <div className="mb-2 text-lg font-semibold text-gray-700">
                    {getPriceByPeriod(plan, selectedPeriod).label}
                  </div>

                  {/* Lista de features/benefícios */}
                  <ul className="mb-4 text-sm text-gray-600 list-disc list-inside">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: isCurrentPlan ? 1 : 1.02 }}
                    whileTap={{ scale: isCurrentPlan ? 1 : 0.98 }}
                    onClick={async () => {
                      if (isCurrentPlan) return;
                      setIsPurchasing(`${plan.id}_${selectedPeriod}`);
                      try {
                        toast.loading('Redirecionando para pagamento...', { id: 'purchase' });
                        if (!user?.id) throw new Error('Usuário não encontrado');
                        const preference = await createPaymentPreference({
                          title: `Assinatura DropCalc - ${plan.name}`,
                          description: `Plano ${plan.name} (${selectedPeriod})`,
                          price: getPriceByPeriod(plan, selectedPeriod).value,
                          planId: plan.id,
                          userId: user.id
                        });
                        window.location.href = preference.init_point;
                      } catch (error) {
                        console.error('Erro ao criar pagamento:', error);
                        toast.error('Erro ao redirecionar para pagamento.', { id: 'purchase' });
                      } finally {
                        setIsPurchasing(null);
                      }
                    }}
                    disabled={isPurchasingThis || isCurrentPlan}
                    className={`w-full py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      isCurrentPlan
                        ? 'bg-green-100 text-green-700 cursor-default'
                        : isPurchasingThis
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-xl`
                    }`}
                  >
                    {isPurchasingThis ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processando...
                      </>
                    ) : isCurrentPlan ? (
                      <>
                        <Check className="w-5 h-5" />
                        Plano Ativo
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5" />
                        Assinar
                      </>
                    )}
                  </motion.button>

                  {!isCurrentPlan && (
                    <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        <span>Pagamento Seguro</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>Google Play</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Dica Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center"
        >
          <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-xl font-bold mb-2">💡 Dica Especial</h3>
          <p className="opacity-90">
            Com o DropCalc Premium, você economiza tempo e maximiza seus lucros com cálculos automáticos e integração completa.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;
