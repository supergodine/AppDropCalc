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
      icon: <Check className="w-10 h-10 text-gray-500" />,
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
      icon: (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.15, 1], boxShadow: ["0 0 0px #FFD700", "0 0 24px #FFD700", "0 0 0px #FFD700"] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Star className="w-12 h-12 text-yellow-500 drop-shadow-lg" />
        </motion.div>
      ),
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
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="relative flex items-center justify-center"
        >
          <Gem className="w-12 h-12 text-purple-500 drop-shadow-lg" />
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -top-2 -right-2"
          >
            <Shield className="w-7 h-7 text-blue-500 drop-shadow-xl" />
          </motion.span>
        </motion.div>
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
  <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4 flex items-center justify-center">
  <div className="w-full max-w-6xl mx-auto">
        {/* Seletor de período de cobrança */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 border-2 border-blue-200 shadow-2xl mb-8"
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center tracking-tight">Escolha o período de cobrança</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                  whileHover={{ scale: 1.07, boxShadow: "0 0 16px #60A5FA" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedPeriod(period)}
                  className={`p-4 rounded-2xl border-2 font-semibold text-lg transition-all relative shadow-lg ${
                    selectedPeriod === period
                      ? 'border-blue-500 bg-blue-100 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <p className="font-bold text-lg">{labels[period]}</p>
                  {period !== 'monthly' && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Card do Plano Básico */}
            <>
            {plans[0] && (
              <motion.div
                key={plans[0].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border-2 shadow-2xl transition-all duration-300 ${currentPlan === plans[0].id ? 'ring-2 ring-green-500' : ''}`}
              >
                {/* Ícone, nome e preço do Básico */}
                <div className="flex flex-col items-center mb-8">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${plans[0].gradient} shadow-lg`}>
                    {plans[0].icon}
                  </div>
                  <span className={`text-3xl font-extrabold text-${plans[0].color}-700 mb-2 tracking-tight`}>{plans[0].name}</span>
                  <span className="text-2xl font-extrabold text-gray-900 mb-3">{getPriceByPeriod(plans[0], selectedPeriod).label}</span>
                </div>
                {/* Lista de benefícios do Básico */}
                <ul className="mb-8 text-base text-gray-900 space-y-4">
                  {plans[0].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Botão de Assinar Básico */}
                <motion.button
                  whileHover={{ scale: currentPlan === plans[0].id ? 1 : 1.07, boxShadow: currentPlan === plans[0].id ? undefined : "0 0 16px #60A5FA" }}
                  whileTap={{ scale: currentPlan === plans[0].id ? 1 : 0.97 }}
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
                  className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                    currentPlan === plans[0].id
                      ? 'bg-green-100 text-green-700 cursor-default'
                      : isPurchasing === `${plans[0].id}_${selectedPeriod}`
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : `bg-gradient-to-r ${plans[0].gradient} text-white hover:shadow-2xl`
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
                className={`relative bg-white/90 backdrop-blur-2xl rounded-3xl p-10 border-4 shadow-2xl transition-all duration-300 ${plans[1].popular ? 'border-yellow-400 shadow-yellow-200 scale-105' : ''} ${currentPlan === plans[1].id ? 'ring-2 ring-green-500' : ''}`}
              >
                {/* Ícone, nome, selo e preço do Gold */}
                <div className="flex flex-col items-center mb-10">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${plans[1].gradient} shadow-lg`}>
                    {plans[1].icon}
                  </div>
                  <span className={`text-4xl font-extrabold text-${plans[1].color}-700 mb-2 tracking-tight`}>{plans[1].name}</span>
                  {plans[1].popular && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="px-4 py-2 bg-yellow-500 text-white text-sm font-bold rounded-full mb-3 shadow-lg border-2 border-yellow-300 animate-pulse"
                    >
                      ⭐ Mais Popular
                    </motion.span>
                  )}
                  <span className="text-3xl font-extrabold text-gray-900 mb-3">{getPriceByPeriod(plans[1], selectedPeriod).label}</span>
                </div>
                {/* Lista de benefícios do Gold */}
                <ul className="mb-10 text-base text-gray-900 space-y-4">
                  {plans[1].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Botão de Assinar Gold */}
                <motion.button
                  whileHover={{ scale: currentPlan === plans[1].id ? 1 : 1.07, boxShadow: currentPlan === plans[1].id ? undefined : "0 0 16px #FFD700" }}
                  whileTap={{ scale: currentPlan === plans[1].id ? 1 : 0.97 }}
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
                  className={`w-full py-5 rounded-2xl font-bold text-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                    currentPlan === plans[1].id
                      ? 'bg-green-100 text-green-700 cursor-default'
                      : isPurchasing === `${plans[1].id}_${selectedPeriod}`
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : `bg-gradient-to-r ${plans[1].gradient} text-white hover:shadow-2xl`
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
                className={`relative bg-white/95 backdrop-blur-2xl rounded-3xl p-10 border-4 shadow-2xl transition-all duration-300 ${currentPlan === plans[2].id ? 'ring-2 ring-blue-500' : ''}`}
              >
                {/* Ícone, nome e preço do Premium */}
                <div className="flex flex-col items-center mb-10">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${plans[2].gradient} shadow-lg`}>
                    {plans[2].icon}
                  </div>
                  <span className={`text-4xl font-extrabold text-${plans[2].color}-700 mb-2 tracking-tight`}>{plans[2].name}</span>
                  <span className="text-3xl font-extrabold text-gray-900 mb-3">{getPriceByPeriod(plans[2], selectedPeriod).label}</span>
                </div>
                {/* Lista de benefícios do Premium */}
                <ul className="mb-10 text-base text-gray-900 space-y-4">
                  {plans[2].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Botão de Assinar Premium */}
                <motion.button
                  whileHover={{ scale: currentPlan === plans[2].id ? 1 : 1.07, boxShadow: currentPlan === plans[2].id ? undefined : "0 0 16px #6366F1" }}
                  whileTap={{ scale: currentPlan === plans[2].id ? 1 : 0.97 }}
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
                  className={`w-full py-5 rounded-2xl font-bold text-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                    currentPlan === plans[2].id
                      ? 'bg-blue-100 text-blue-700 cursor-default'
                      : isPurchasing === `${plans[2].id}_${selectedPeriod}`
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : `bg-gradient-to-r ${plans[2].gradient} text-white hover:shadow-2xl`
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
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl mt-10"
        >
          <Zap className="w-16 h-16 mx-auto mb-6 opacity-90 animate-bounce" />
          <h3 className="text-2xl font-extrabold mb-3 tracking-tight">💡 Dica Especial</h3>
          <p className="opacity-95 text-lg">
            Com o <span className="font-bold text-yellow-200">DropCalc Premium</span>, você economiza tempo e maximiza seus lucros com cálculos automáticos, integração completa e segurança avançada.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;
