// src/pages/Payment.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Shield,
  Star,
  Check,
  ArrowLeft,
  Crown,
  Award,
  Gem,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { createPaymentPreference } from '../services/mercadoPago';
import { useAuth } from '../hooks/useAuth';

interface BillingState {
  isConnected: boolean;
  isLoading: boolean;
  products:
  | {
    [key: string]: {
      id: string;
      title: string;
      prices: {
        monthly: string;
        quarterly: string;
        annual: string;
      };
    };
  }
  | null;
}

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
  const [currentPlan, setCurrentPlan] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'quarterly' | 'annual'>('monthly');
  const [isPurchasing, setIsPurchasing] = useState<string | null>(null);
  const [billingState, setBillingState] = useState<BillingState>({
    isConnected: false,
    isLoading: true,
    products: null
  });
  const navigate = useNavigate();
  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Básico',
      icon: <Gem className="w-10 h-10" />,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Cálculo de precificação manual e automático',
        'Suporte a Real (BRL) e Dólar (USD)',
        'Acesso à calculadora padrão',
        'Suporte via e-mail'
      ],
      prices: {
        monthly: 4.9,
        quarterly: { total: 13.4, perMonth: 4.47 },
        annual: { total: 44.9, perMonth: 3.74 }
      }
    },
    {
      id: 'gold',
      name: 'Gold',
      icon: <Award className="w-10 h-10" />,
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-500',
      popular: true,
      features: [
        'Suporte a 10+ moedas internacionais',
        'Integração com principais plataformas',
        'Cálculo automático em tempo real',
        'Atualização automática de câmbio',
        'Shopee, AliExpress, Nuvemshop'
      ],
      prices: {
        monthly: 9.9,
        quarterly: { total: 26.9, perMonth: 8.97 },
        annual: { total: 89.9, perMonth: 7.49 }
      }
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: <Crown className="w-10 h-10" />,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Todas as moedas globais (70+)',
        'Integração com todas as plataformas',
        'IA de precificação inteligente',
        'Suporte técnico prioritário',
        'Recursos avançados exclusivos'
      ],
      prices: {
        monthly: 19.9,
        quarterly: { total: 54.9, perMonth: 18.3 },
        annual: { total: 199.9, perMonth: 16.66 }
      }
    }
  ];

  // Recupera plano atual salvo no localStorage (se for recente e corresponder ao usuário)
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
          localStorage.removeItem('premiumActive');
        }
      } else {
        setCurrentPlan(userPlan);
      }
    }

    initializeBilling();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initializeBilling = async () => {
    try {
      setBillingState(prev => ({ ...prev, isLoading: true }));

      // Simula delay de conexão (mantém o UX do antigo)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock de produtos — mantemos por compatibilidade visual
      const mockProducts = {
        dropcalc_basic: {
          id: 'dropcalc_basic',
          title: 'DropCalc Básico',
          prices: {
            monthly: 'R$ 0,00',
            quarterly: 'R$ 0,00',
            annual: 'R$ 0,00'
          }
        },
        dropcalc_gold: {
          id: 'dropcalc_gold',
          title: 'DropCalc Gold',
          prices: {
            monthly: 'R$ 9,90',
            quarterly: 'R$ 26,90',
            annual: 'R$ 89,90'
          }
        },
        dropcalc_premium: {
          id: 'dropcalc_premium',
          title: 'DropCalc Premium',
          prices: {
            monthly: 'R$ 19,90',
            quarterly: 'R$ 54,90',
            annual: 'R$ 199,90'
          }
        }
      };

      setBillingState({
        isConnected: true,
        isLoading: false,
        products: mockProducts
      });
    } catch (error) {
      console.error('Erro ao inicializar billing:', error);
      setBillingState(prev => ({ ...prev, isLoading: false }));
      toast.error('Erro ao conectar com a loja. Tente novamente.');
    }
  };

  const getPriceByPeriod = (plan: Plan, period: 'monthly' | 'quarterly' | 'annual') => {
    switch (period) {
      case 'monthly':
        return { value: plan.prices.monthly, label: `R$ ${plan.prices.monthly.toFixed(2)}/mês` };
      case 'quarterly':
        return {
          value: plan.prices.quarterly.total,
          label: `R$ ${plan.prices.quarterly.total.toFixed(2)}`,
          savings: `≈ R$ ${plan.prices.quarterly.perMonth.toFixed(2)}/mês`
        };
      case 'annual':
        return {
          value: plan.prices.annual.total,
          label: `R$ ${plan.prices.annual.total.toFixed(2)}`,
          savings: `≈ R$ ${plan.prices.annual.perMonth.toFixed(2)}/mês`
        };
    }
  };

  const getSavingsPercentage = (plan: Plan, period: 'quarterly' | 'annual') => {
    const monthlyTotal = plan.prices.monthly * (period === 'quarterly' ? 3 : 12);
    const periodPrice = period === 'quarterly' ? plan.prices.quarterly.total : plan.prices.annual.total;
    if (monthlyTotal === 0) return 0;
    return Math.round(((monthlyTotal - periodPrice) / monthlyTotal) * 100);
  };

  const handle[REDACTED_MERCADOPAGO_TOKEN] = async (plan: Plan, period: 'monthly' | 'quarterly' | 'annual') => {
    const purchaseKey = `${plan.id}_${period}`;
    setIsPurchasing(purchaseKey);
    try {
      toast.loading('Redirecionando para pagamento...', { id: 'purchase' });
      if (!user?.id) throw new Error('Usuário não encontrado');

      const preference = await createPaymentPreference({
        title: `Assinatura DropCalc - ${plan.name}`,
        description: `Plano ${plan.name} (${period})`,
        price: getPriceByPeriod(plan, period).value,
        planId: plan.id,
        userId: user.id
      });

      // Redireciona para o checkout do Mercado Pago
      if (preference?.init_point) {
        window.location.href = preference.init_point;
      } else {
        throw new Error('Preferência inválida retornada pelo servidor');
      }
    } catch (error) {
      console.error('Erro ao criar pagamento:', error);
      toast.error('Erro ao redirecionar para pagamento.', { id: 'purchase' });
    } finally {
      setIsPurchasing(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-white/50 transition-colors"
            aria-label="Voltar"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Escolha seu plano DropCalc</h1>
            <p className="text-gray-600 mt-1">Ative os recursos avançados de precificação e integração automática.</p>
          </div>
        </motion.div>

        {/* Current Plan Display */}
        {currentPlan && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8"
          >
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">
                  Plano Ativo: {plans.find(p => p.id === currentPlan)?.name}
                </h3>
                <p className="text-green-600 text-sm">Sua assinatura está ativa e funcionando perfeitamente!</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Período */}
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
                  className={`p-3 rounded-xl border-2 transition-all relative ${selectedPeriod === period
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                >
                  <p className="font-medium text-gray-800">{labels[period]}</p>
                  {period !== 'monthly' && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      -{getSavingsPercentage(plans[1], period)}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Loading */}
        {billingState.isLoading && (
          <div className="text-center mb-8">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Carregando planos disponíveis...</p>
          </div>
        )}

        {/* Plans Grid */}
        {!billingState.isLoading && (
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {plans.map((plan, index) => {
              const priceInfo = getPriceByPeriod(plan, selectedPeriod);
              const isCurrentPlan = currentPlan === plan.id;
              const purchaseKey = `${plan.id}_${selectedPeriod}`;
              const isPurchasingThis = isPurchasing === purchaseKey;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 border shadow-xl transition-all duration-300 ${plan.popular
                      ? 'border-yellow-300 shadow-2xl transform scale-105'
                      : 'border-white/20 hover:shadow-2xl hover:scale-102'
                    } ${isCurrentPlan ? 'ring-2 ring-green-500' : ''}`}
                >
                  {/* Popular badge (central) */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Mais Popular
                      </div>
                    </div>
                  )}

                  {/* Current plan badge (right) */}
                  {isCurrentPlan && (
                    <div className="absolute -top-3 right-4">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Ativo
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl mb-4 text-white`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-800 mb-1">
                      {priceInfo.label}
                    </div>
                    {('savings' in priceInfo) && priceInfo.savings && (
                      <p className="text-green-600 text-sm font-medium">{priceInfo.savings}</p>
                    )}
                    {selectedPeriod !== 'monthly' && (
                      <p className="text-gray-500 text-xs mt-1">
                        Economize {getSavingsPercentage(plan, selectedPeriod)}% vs mensal
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Purchase (Mercado Pago) */}
                  <motion.button
                    whileHover={{ scale: isCurrentPlan ? 1 : 1.02 }}
                    whileTap={{ scale: isCurrentPlan ? 1 : 0.98 }}
                    onClick={() => !isCurrentPlan && handle[REDACTED_MERCADOPAGO_TOKEN](plan, selectedPeriod)}
                    disabled={isPurchasingThis || isCurrentPlan}
                    className={`w-full py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${isCurrentPlan
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

                  {/* Small secondary button example (disabled if current) */}
                  <motion.button
                    whileHover={{ scale: isCurrentPlan ? 1 : 1.02 }}
                    whileTap={{ scale: isCurrentPlan ? 1 : 0.98 }}
                    onClick={() => {
                      /* opcional: qualquer ação secundária — mantive para simetria com o novo */
                    }}
                    disabled
                    className="w-full mt-3 py-3 rounded-xl font-medium text-sm bg-white/30 text-gray-700 cursor-not-allowed"
                    aria-hidden
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4" />
                      Pagamento Seguro
                    </div>
                  </motion.button>

                  {/* Security badges */}
                  {!isCurrentPlan && (
                    <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        <span>Pagamento Seguro</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>Mercado Pago</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Comparison Table (abaixo dos planos) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Compare os Recursos</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Recursos</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-600">Básico</th>
                  <th className="text-center py-3 px-4 font-semibold text-yellow-600">Gold</th>
                  <th className="text-center py-3 px-4 font-semibold text-purple-600">Premium</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Calculadora de precificação</td>
                  <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Moedas suportadas</td>
                  <td className="text-center py-3 px-4 text-gray-600">2</td>
                  <td className="text-center py-3 px-4 text-gray-600">10+</td>
                  <td className="text-center py-3 px-4 text-gray-600">70+</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Integração com plataformas</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">IA de precificação</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Suporte técnico</td>
                  <td className="text-center py-3 px-4 text-gray-600">E-mail</td>
                  <td className="text-center py-3 px-4 text-gray-600">E-mail</td>
                  <td className="text-center py-3 px-4 text-gray-600">Prioritário</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Final Tip */}
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
