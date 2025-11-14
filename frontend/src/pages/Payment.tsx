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
        'Gratuito (R$ 0,00/mês)',
        'Limite de 2 moedas (ex: BRL, USD)',
        'Limite de 2 plataformas (Shopify, Nuvemshop)',
        'Limite de 2 gateways de pagamento (Stripe, Mercado Pago)',
        'Pode realizar 10 cálculos por mês',
        'Acesso à calculadora padrão',
        'Suporte via e-mail'
      ],
      prices: {
        monthly: 0.0,
        quarterly: { total: 0.0, perMonth: 0.0 },
        annual: { total: 0.0, perMonth: 0.0 }
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
        'R$ 9,90/mês',
        'Suporte a 10 moedas',
        'Até 4 plataformas',
        'Até 4 gateways de pagamento',
        'Cálculo automático em tempo real',
        'Atualização automática de câmbio',
        'Principais plataformas (Shopee, AliExpress, Nuvemshop, etc.)',
        'Suporte via e-mail'
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
        icon: (
          <span className="relative flex items-center justify-center">
            <Gem className="w-8 h-8 text-purple-500" />
            <Shield className="w-5 h-5 text-blue-500 absolute -top-2 -right-2" />
          </span>
        ),
      color: 'purple',
      gradient: 'from-purple-400 to-purple-600',
      features: [
        'R$ 19,90/mês',
        'Todas as moedas disponíveis (70+)',
        'Todas as plataformas integradas',
        'Todos os gateways de pagamento',
        'Cálculo automático em tempo real',
        'Histórico de preços completo',
          'Suporte técnico prioritário',
          'Segurança avançada nos pagamentos'
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
        {/* Seletor de período de cobrança */}
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
              // Botões de seleção de período
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

        {/* Grid de planos: cada coluna é um plano */}
        {!billingState.isLoading && (
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Card do Plano Básico */}
            <>
            {plans[0] && (
              <motion.div
                key={plans[0].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 border shadow-xl transition-all duration-300 ${currentPlan === plans[0].id ? 'ring-2 ring-green-500' : ''}`}
              >
                {/* Ícone, nome e preço do Básico */}
                <div className="flex flex-col items-center mb-6">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${plans[0].gradient} shadow-lg`}>
                    {plans[0].icon}
                  </div>
                  <span className={`text-2xl font-bold text-${plans[0].color}-700 mb-1`}>{plans[0].name}</span>
                  <span className="text-2xl font-extrabold text-gray-900 mb-2">{getPriceByPeriod(plans[0], selectedPeriod).label}</span>
                </div>
                {/* Lista de benefícios do Básico */}
                <ul className="mb-6 text-base text-gray-900 space-y-3">
                  {plans[0].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Botão de Assinar Básico */}
                <motion.button
                  whileHover={{ scale: currentPlan === plans[0].id ? 1 : 1.02 }}
                  whileTap={{ scale: currentPlan === plans[0].id ? 1 : 0.98 }}
                  onClick={async () => {
                    if (currentPlan === plans[0].id) return;
                    setIsPurchasing(`${plans[0].id}_${selectedPeriod}`);
                    try {
                      toast.loading('Redirecionando para pagamento...', { id: 'purchase' });
                      if (!user?.id) throw new Error('Usuário não encontrado');
                      const preference = await createPaymentPreference({
                        title: `Assinatura DropCalc - ${plans[0].name}`,
                        description: `Plano ${plans[0].name} (${selectedPeriod})`,
                        price: getPriceByPeriod(plans[0], selectedPeriod).value,
                        planId: plans[0].id,
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
                  disabled={isPurchasing === `${plans[0].id}_${selectedPeriod}` || currentPlan === plans[0].id}
                  className={`w-full py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    currentPlan === plans[0].id
                      ? 'bg-green-100 text-green-700 cursor-default'
                      : isPurchasing === `${plans[0].id}_${selectedPeriod}`
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : `bg-gradient-to-r ${plans[0].gradient} text-white hover:shadow-xl`
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  Assinar
                </motion.button>
              </motion.div>
            )}
            {/* Card do Plano Gold */}
            {plans[1] && (
              <motion.div
                key={plans[1].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 border shadow-xl transition-all duration-300 ${plans[1].popular ? 'border-yellow-300 shadow-2xl transform scale-105' : ''} ${currentPlan === plans[1].id ? 'ring-2 ring-green-500' : ''}`}
              >
                {/* Ícone, nome, selo e preço do Gold */}
                <div className="flex flex-col items-center mb-6">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${plans[1].gradient} shadow-lg`}>
                    {plans[1].icon}
                  </div>
                  <span className={`text-2xl font-bold text-${plans[1].color}-700 mb-1`}>{plans[1].name}</span>
                  {plans[1].popular && (
                    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full mb-2 shadow">Mais Popular</span>
                  )}
                  <span className="text-2xl font-extrabold text-gray-900 mb-2">{getPriceByPeriod(plans[1], selectedPeriod).label}</span>
                </div>
                {/* Lista de benefícios do Gold */}
                <ul className="mb-6 text-base text-gray-900 space-y-3">
                  {plans[1].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Botão de Assinar Gold */}
                <motion.button
                  whileHover={{ scale: currentPlan === plans[1].id ? 1 : 1.02 }}
                  whileTap={{ scale: currentPlan === plans[1].id ? 1 : 0.98 }}
                  onClick={async () => {
                    if (currentPlan === plans[1].id) return;
                    setIsPurchasing(`${plans[1].id}_${selectedPeriod}`);
                    try {
                      toast.loading('Redirecionando para pagamento...', { id: 'purchase' });
                      if (!user?.id) throw new Error('Usuário não encontrado');
                      const preference = await createPaymentPreference({
                        title: `Assinatura DropCalc - ${plans[1].name}`,
                        description: `Plano ${plans[1].name} (${selectedPeriod})`,
                        price: getPriceByPeriod(plans[1], selectedPeriod).value,
                        planId: plans[1].id,
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
                  disabled={isPurchasing === `${plans[1].id}_${selectedPeriod}` || currentPlan === plans[1].id}
                  className={`w-full py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    currentPlan === plans[1].id
                      ? 'bg-green-100 text-green-700 cursor-default'
                      : isPurchasing === `${plans[1].id}_${selectedPeriod}`
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : `bg-gradient-to-r ${plans[1].gradient} text-white hover:shadow-xl`
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  Assinar
                </motion.button>
              </motion.div>
            )}
            {/* Card do Plano Premium */}
            {plans[2] && (
              <motion.div
                key={plans[2].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 border shadow-xl transition-all duration-300 ${currentPlan === plans[2].id ? 'ring-2 ring-green-500' : ''}`}
              >
                {/* Ícone, nome e preço do Premium */}
                <div className="flex flex-col items-center mb-6">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${plans[2].gradient} shadow-lg`}>
                    {plans[2].icon}
                  </div>
                  <span className={`text-2xl font-bold text-${plans[2].color}-700 mb-1`}>{plans[2].name}</span>
                  <span className="text-2xl font-extrabold text-gray-900 mb-2">{getPriceByPeriod(plans[2], selectedPeriod).label}</span>
                </div>
                {/* Lista de benefícios do Premium */}
                <ul className="mb-6 text-base text-gray-900 space-y-3">
                  {plans[2].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Botão de Assinar Premium */}
                <motion.button
                  whileHover={{ scale: currentPlan === plans[2].id ? 1 : 1.02 }}
                  whileTap={{ scale: currentPlan === plans[2].id ? 1 : 0.98 }}
                  onClick={async () => {
                    if (currentPlan === plans[2].id) return;
                    setIsPurchasing(`${plans[2].id}_${selectedPeriod}`);
                    try {
                      toast.loading('Redirecionando para pagamento...', { id: 'purchase' });
                      if (!user?.id) throw new Error('Usuário não encontrado');
                      const preference = await createPaymentPreference({
                        title: `Assinatura DropCalc - ${plans[2].name}`,
                        description: `Plano ${plans[2].name} (${selectedPeriod})`,
                        price: getPriceByPeriod(plans[2], selectedPeriod).value,
                        planId: plans[2].id,
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
                  disabled={isPurchasing === `${plans[2].id}_${selectedPeriod}` || currentPlan === plans[2].id}
                  className={`w-full py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    currentPlan === plans[2].id
                      ? 'bg-green-100 text-green-700 cursor-default'
                      : isPurchasing === `${plans[2].id}_${selectedPeriod}`
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : `bg-gradient-to-r ${plans[2].gradient} text-white hover:shadow-xl`
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  Assinar
                </motion.button>
              </motion.div>
            )}
            </>
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
