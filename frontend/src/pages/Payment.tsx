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
// import { createPaymentPreference } from '../services/mercadoPago';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'quarterly' | 'annual'>('monthly');
  const [billingState, setBillingState] = useState({
    isConnected: false,
    isLoading: true,
    products: null,
  });
  const [currentPlan, setCurrentPlan] = useState<string | null>(null);

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
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className={`relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border-2 shadow-2xl flex flex-col h-full transition-all duration-300 ${plan.popular ? 'border-yellow-400 shadow-yellow-200 scale-105' : ''} ${currentPlan === plan.id ? 'ring-2 ring-green-500' : ''}`}
              >
                {/* Ícone, nome e preço */}
                <div className="flex flex-col items-center mb-8">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${plan.gradient} shadow-lg`}>
                    {plan.icon}
                  </div>
                  <span className={`text-3xl font-extrabold text-${plan.color}-700 mb-2 tracking-tight`}>{plan.name}</span>
                  {plan.popular && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="px-4 py-2 bg-yellow-500 text-white text-sm font-bold rounded-full mb-3 shadow-lg border-2 border-yellow-300 animate-pulse"
                    >
                      ⭐ Mais Popular
                    </motion.span>
                  )}
                  <span className={`text-2xl font-extrabold text-gray-900 mb-3`}>{getPriceByPeriod(plan, selectedPeriod).label}</span>
                </div>
                {/* Lista de benefícios */}
                <ul className="mb-8 text-base text-gray-900 space-y-4 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Botão de Assinar */}
                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.07, boxShadow: `0 0 16px ${plan.color === 'yellow' ? '#FFD700' : plan.color === 'purple' ? '#6366F1' : '#60A5FA'}` }}
                    whileTap={{ scale: 0.97 }}
                    onClick={async () => {
                      // Ativar plano no localStorage
                      localStorage.setItem('userPlan', JSON.stringify({
                        type: plan.id,
                        name: plan.name,
                        price: getPriceByPeriod(plan, selectedPeriod).value,
                        active: true
                      }));
                      // Criar usuário de teste no localStorage
                      localStorage.setItem('currentUser', JSON.stringify({
                        id: 'test-user',
                        email: 'teste@dropcalc.com',
                        name: 'Usuário Teste',
                        role: 'user',
                        plan: {
                          type: plan.id,
                          name: plan.name,
                          price: getPriceByPeriod(plan, selectedPeriod).value,
                          active: true
                        }
                      }));
                      toast.success(`Plano ${plan.name} ativado!`);
                      navigate('/dashboard');
                    }}
                    className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 bg-gradient-to-r ${plan.gradient} text-white hover:shadow-2xl`}
                  >
                    <CreditCard className="w-5 h-5" />
                    Assinar
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tabela comparativa compacta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="overflow-x-auto mb-10"
        >
          <h3 className="text-2xl font-extrabold text-blue-700 mb-6 text-center tracking-tight">Comparativo dos Planos</h3>
          <table className="min-w-full bg-white/80 rounded-3xl shadow-2xl border border-blue-100">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left font-bold text-lg bg-blue-50 rounded-tl-3xl">Benefício</th>
                {plans.map(plan => (
                  <th key={plan.id} className="py-4 px-6 text-center font-bold text-lg bg-blue-50">
                    <span className={`text-base font-bold text-${plan.color}-700`}>{plan.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Preço */}
              <tr className="bg-white/60">
                <td className="py-3 px-6 text-gray-700 text-base font-medium">Preço</td>
                {plans.map(plan => (
                  <td key={plan.id} className="py-3 px-6 text-center font-bold text-lg">
                    {getPriceByPeriod(plan, selectedPeriod).label}
                  </td>
                ))}
              </tr>
              {/* Moedas suportadas */}
              <tr className="bg-blue-50/60">
                <td className="py-3 px-6 text-gray-700 text-base font-medium">Moedas suportadas</td>
                <td className="py-3 px-6 text-center">2</td>
                <td className="py-3 px-6 text-center">10</td>
                <td className="py-3 px-6 text-center">70+</td>
              </tr>
              {/* Plataformas integradas */}
              <tr className="bg-white/60">
                <td className="py-3 px-6 text-gray-700 text-base font-medium">Plataformas integradas</td>
                <td className="py-3 px-6 text-center">2</td>
                <td className="py-3 px-6 text-center">4</td>
                <td className="py-3 px-6 text-center">Todas</td>
              </tr>
              {/* Gateways de pagamento */}
              <tr className="bg-blue-50/60">
                <td className="py-3 px-6 text-gray-700 text-base font-medium">Gateways de pagamento</td>
                <td className="py-3 px-6 text-center">2</td>
                <td className="py-3 px-6 text-center">4</td>
                <td className="py-3 px-6 text-center">Todos</td>
              </tr>
              {/* Cálculos por mês */}
              <tr className="bg-white/60">
                <td className="py-3 px-6 text-gray-700 text-base font-medium">Cálculos por mês</td>
                <td className="py-3 px-6 text-center">10</td>
                <td className="py-3 px-6 text-center">Ilimitado</td>
                <td className="py-3 px-6 text-center">Ilimitado</td>
              </tr>
              {/* Suporte */}
              <tr className="bg-blue-50/60">
                <td className="py-3 px-6 text-gray-700 text-base font-medium">Suporte</td>
                <td className="py-3 px-6 text-center">E-mail</td>
                <td className="py-3 px-6 text-center">E-mail</td>
                <td className="py-3 px-6 text-center">Prioritário</td>
              </tr>
              {/* Segurança avançada */}
              <tr className="bg-white/60 rounded-b-3xl">
                <td className="py-3 px-6 text-gray-700 text-base font-medium">Segurança avançada</td>
                <td className="py-3 px-6 text-center">—</td>
                <td className="py-3 px-6 text-center">—</td>
                <td className="py-3 px-6 text-center"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </motion.div>

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
