// src/pages/Payment.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Shield,
  Star,
  ArrowLeft,
  Crown,
  Award,
  Gem,
  Zap,
  Check
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface BillingState {
  isConnected: boolean;
  isLoading: boolean;
  products: Record<string, any> | null;
}

interface Plan {
  id: "basic" | "gold" | "premium";
  name: string;
  icon: React.ReactNode;
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
  const [billingState, setBillingState] = useState<BillingState>({
    isConnected: false,
    isLoading: true,
    products: null
  });
  const [isPurchasing, setIsPurchasing] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<
    "monthly" | "quarterly" | "annual"
  >("monthly");
  const [currentPlan, setCurrentPlan] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      id: "basic",
      name: "Básico",
      icon: <Gem className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Cálculo de precificação manual e automático",
        "Suporte a Real (BRL) e Dólar (USD)",
        "Acesso à calculadora padrão",
        "Suporte via e-mail"
      ],
      prices: {
        monthly: 4.9,
        quarterly: { total: 12.9, perMonth: 4.3 },
        annual: { total: 39.9, perMonth: 3.33 }
      }
    },
    {
      id: "gold",
      name: "Gold",
      icon: <Award className="w-8 h-8" />,
      gradient: "from-yellow-400 to-orange-400",
      popular: true,
      features: [
        "Suporte a 10+ moedas internacionais",
        "Integração com principais plataformas",
        "Cálculo automático em tempo real",
        "Atualização automática de câmbio",
        "Shopee, AliExpress, Nuvemshop"
      ],
      prices: {
        monthly: 9.9,
        quarterly: { total: 26.9, perMonth: 8.97 },
        annual: { total: 89.9, perMonth: 7.49 }
      }
    },
    {
      id: "premium",
      name: "Premium",
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Todas as moedas globais (70+)",
        "Integração com todas as plataformas",
        "IA de precificação inteligente",
        "Suporte técnico prioritário",
        "Recursos avançados exclusivos"
      ],
      prices: {
        monthly: 19.9,
        quarterly: { total: 54.9, perMonth: 18.3 },
        annual: { total: 199.9, perMonth: 16.66 }
      }
    }
  ];

  useEffect(() => {
    // Carregar plano salvo localmente (simulação)
  const userPlan = localStorage.getItem("userPlan");
  const billingStatus = localStorage.getItem("billingStatus");

    if (userPlan && billingStatus === "active") {
      // opcional: validar expiração por subscriptionDate
      setCurrentPlan(userPlan);
    }

    initializeBilling();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initializeBilling = async () => {
    try {
      setBillingState(prev => ({ ...prev, isLoading: true }));
      // Simular conexão (substituir pela integração real)
      await new Promise(resolve => setTimeout(resolve, 900));
      const mockProducts = {
        dropcalc_basic: {
          id: "dropcalc_basic",
          title: "DropCalc Básico",
          prices: {
            monthly: "R$ 4,90",
            quarterly: "R$ 12,90",
            annual: "R$ 39,90"
          }
        },
        dropcalc_gold: {
          id: "dropcalc_gold",
          title: "DropCalc Gold",
          prices: {
            monthly: "R$ 9,90",
            quarterly: "R$ 26,90",
            annual: "R$ 89,90"
          }
        },
        dropcalc_premium: {
          id: "dropcalc_premium",
          title: "DropCalc Premium",
          prices: {
            monthly: "R$ 19,90",
            quarterly: "R$ 54,90",
            annual: "R$ 199,90"
          }
        }
      };

      setBillingState({
        isConnected: true,
        isLoading: false,
        products: mockProducts
      });
    } catch (err) {
      console.error(err);
      setBillingState(prev => ({ ...prev, isLoading: false }));
      toast.error("Erro ao conectar com a loja. Tente novamente.");
    }
  };

  const getSavingsPercentage = (plan: Plan, period: "quarterly" | "annual") => {
    const monthlyTotal = plan.prices.monthly * (period === "quarterly" ? 3 : 12);
    const periodPrice = period === "quarterly" ? plan.prices.quarterly.total : plan.prices.annual.total;
    return Math.round(((monthlyTotal - periodPrice) / monthlyTotal) * 100);
  };

  const getPriceLabel = (plan: Plan, period: "monthly" | "quarterly" | "annual") => {
    switch (period) {
      case "monthly":
        return `R$ ${plan.prices.monthly.toFixed(2)}/mês`;
      case "quarterly":
        return `R$ ${plan.prices.quarterly.total.toFixed(2)} (≈ R$ ${plan.prices.quarterly.perMonth.toFixed(2)}/mês)`;
      case "annual":
        return `R$ ${plan.prices.annual.total.toFixed(2)} (≈ R$ ${plan.prices.annual.perMonth.toFixed(2)}/mês)`;
    }
  };

  const handlePurchase = async (planId: Plan["id"], period: "monthly" | "quarterly" | "annual") => {
    const key = `${planId}_${period}`;
    setIsPurchasing(key);
    toast.loading("Processando pagamento...", { id: "purchase" });

    try {
      // Aqui: substituir por chamada real ao backend / Mercado Pago / Stripe
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Salvar no localStorage (simulação)
      localStorage.setItem("userPlan", planId);
      localStorage.setItem("billingStatus", "active");
      localStorage.setItem("subscriptionPeriod", period);
      localStorage.setItem("subscriptionDate", new Date().toISOString());

      setCurrentPlan(planId);
      toast.success("Assinatura ativada com sucesso!", { id: "purchase" });

      // Redirecionar para calculadora (após confirmar o pagamento real, seu webhook/backend deve confirmar)
      setTimeout(() => {
        navigate("/calculadora");
      }, 900);
    } catch (error) {
      console.error("Erro na compra:", error);
      toast.error("Erro ao processar pagamento.");
    } finally {
      setIsPurchasing(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 py-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-5 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg bg-white/60 hover:bg-white transition-colors shadow-sm"
            aria-label="Voltar"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Escolha seu plano</h1>
            <p className="text-gray-600 mt-1">Ative recursos de integração, cálculos automáticos e histórico.</p>
          </div>
        </motion.div>

        {/* Current Plan */}
        {currentPlan && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/70 border border-green-100 rounded-2xl p-4 mb-6 shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-green-50">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-green-700 font-semibold">Plano ativo</p>
                <p className="text-gray-700 font-medium">{plans.find(p => p.id === currentPlan)?.name}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Period Selection */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Período de Cobrança</h3>
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {(["monthly", "quarterly", "annual"] as const).map(period => {
              const labels: Record<typeof period, string> = {
                monthly: "Mensal",
                quarterly: "Trimestral",
                annual: "Anual"
              };
              return (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition ${
                    selectedPeriod === period
                      ? "bg-blue-50 border-blue-400 text-blue-700"
                      : "bg-white border-gray-200 text-gray-700 hover:shadow"
                  }`}
                >
                  {labels[period]}
                  {period !== "monthly" && (
                    <span className="block text-xs text-green-600 mt-1">
                      -{getSavingsPercentage(plans[1], period as "quarterly" | "annual")}% 
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Loading */}
        {billingState.isLoading ? (
          <div className="text-center py-12">
            <div className="mx-auto w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-600">Carregando planos disponíveis...</p>
          </div>
        ) : (
          <>
            {/* Plans */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {plans.map((plan, idx) => {
                const isCurrent = currentPlan === plan.id;
                const buyKey = `${plan.id}_${selectedPeriod}`;
                const purchasing = isPurchasing === buyKey;
                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className={`relative rounded-3xl p-6 bg-white/90 border shadow-lg overflow-hidden ${
                      plan.popular ? "border-yellow-300 transform scale-102" : "border-white/30"
                    }`}
                  >
                    {/* Popular */}
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Mais Popular
                        </div>
                      </div>
                    )}

                    {/* Active badge */}
                    {isCurrent && (
                      <div className="absolute -top-3 right-4">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          Ativo
                        </div>
                      </div>
                    )}

                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 bg-gradient-to-r ${plan.gradient}`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-5">
                      <div className="text-3xl font-extrabold text-gray-900">{getPriceLabel(plan, selectedPeriod)}</div>
                      {selectedPeriod !== "monthly" && (
                        <p className="text-sm text-gray-500 mt-1">Economize {getSavingsPercentage(plan, selectedPeriod as "quarterly" | "annual")}% vs mensal</p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-6 space-y-3">
                      {plan.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-sm text-gray-700">{f}</p>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => !isCurrent && handlePurchase(plan.id, selectedPeriod)}
                      disabled={purchasing || isCurrent}
                      className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 ${
                        isCurrent
                          ? "bg-green-100 text-green-700 cursor-default"
                          : purchasing
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-2xl`
                      }`}
                    >
                      {purchasing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processando...
                        </>
                      ) : isCurrent ? (
                        <>
                          <Check className="w-5 h-5" />
                          Plano Ativo
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          Assinar com Google Play
                        </>
                      )}
                    </button>

                    {/* Security row */}
                    {!isCurrent && (
                      <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
                        <div className="flex items-center gap-2"><Shield className="w-3 h-3" /><span>Pagamento Seguro</span></div>
                        <div className="flex items-center gap-2"><Star className="w-3 h-3" /><span>Google Play</span></div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Comparison */}
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="bg-white/90 rounded-3xl p-6 border shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Compare os Recursos</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 text-left">Recursos</th>
                      <th className="py-3 px-4 text-center text-blue-600">Básico</th>
                      <th className="py-3 px-4 text-center text-yellow-600">Gold</th>
                      <th className="py-3 px-4 text-center text-purple-600">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="py-3 px-4">Calculadora de precificação</td>
                      <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                      <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                      <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Moedas suportadas</td>
                      <td className="text-center py-3 px-4">2</td>
                      <td className="text-center py-3 px-4">10+</td>
                      <td className="text-center py-3 px-4">70+</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Integração com plataformas</td>
                      <td className="text-center py-3 px-4">—</td>
                      <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                      <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">IA de precificação</td>
                      <td className="text-center py-3 px-4">—</td>
                      <td className="text-center py-3 px-4">—</td>
                      <td className="text-center py-3 px-4"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Suporte técnico</td>
                      <td className="text-center py-3 px-4">E-mail</td>
                      <td className="text-center py-3 px-4">E-mail</td>
                      <td className="text-center py-3 px-4">Prioritário</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Tip */}
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
              <Zap className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h3 className="text-xl font-bold mb-1">💡 Dica Especial</h3>
              <p className="opacity-90">Com o DropCalc Premium você desbloqueia integrações e automações para acelerar suas vendas.</p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;
