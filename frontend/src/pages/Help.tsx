import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Calculator, 
  Package, 
  TrendingUp, 
  Crown, 
  ChevronRight,
  ArrowLeft,
  PlayCircle,
  MessageCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TutorialItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
  videoUrl?: string;
}

const Help: React.FC = () => {
  const navigate = useNavigate();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const tutorials: TutorialItem[] = [
    {
      id: 'calculator',
      title: 'Como usar a calculadora de precificação',
      icon: <Calculator className="w-5 h-5" />,
      content: [
        '1. Digite o custo do produto na moeda de origem (ex: USD)',
        '2. Adicione custos extras como frete, impostos ou taxas',
        '3. Selecione a plataforma onde vai vender (Shopify, Mercado Livre, etc.)',
        '4. Escolha o gateway de pagamento (Mercado Pago, PIX, etc.)',
        '5. Defina sua margem de lucro desejada (%)',
        '6. O preço final será calculado automaticamente em tempo real!'
      ],
      videoUrl: '#'
    },
    {
      id: 'products',
      title: 'Como cadastrar produtos',
      icon: <Package className="w-5 h-5" />,
      content: [
        '1. Acesse a calculadora principal no dashboard',
        '2. Preencha todas as informações do produto',
        '3. Use o botão "Salvar" para guardar os dados do produto',
        '4. Seus produtos salvos aparecerão na lista para reutilização',
        '5. Você pode editar ou duplicar produtos existentes',
        '6. Use a função "Limpar" para começar um novo cálculo'
      ]
    },
    {
      id: 'margins',
      title: 'Como entender margens e taxas',
      icon: <TrendingUp className="w-5 h-5" />,
      content: [
        '• Margem de Lucro: Percentual que você quer ganhar sobre o custo total',
        '• Taxa da Plataforma: Comissão cobrada pela plataforma de venda',
        '• Taxa do Gateway: Taxa do meio de pagamento escolhido',
        '• Taxa de Câmbio: Conversão entre moedas (atualizada em tempo real)',
        '• Custos Adicionais: Frete, impostos, embalagem, etc.',
        '• Preço Final: Valor que você deve cobrar do cliente'
      ]
    },
    {
      id: 'premium',
      title: 'Como ativar o plano Premium',
      icon: <Crown className="w-5 h-5" />,
      content: [
        '1. Clique em "Ativar Premium" no menu principal',
        '2. Revise os recursos inclusos no plano Premium',
        '3. Clique em "Comprar com Mercado Pago"',
        '4. Complete o pagamento através do Mercado Pago',
        '5. Seu acesso Premium será ativado automaticamente',
        '6. Aproveite todos os recursos avançados da calculadora!'
      ]
    }
  ];

  const quickTips = [
    {
      title: 'Dica de Margem',
      content: 'Para dropshipping, recomendamos margens entre 30-50% para cobrir custos inesperados.'
    },
    {
      title: 'Conversão de Moedas',
      content: 'As taxas de câmbio são atualizadas em tempo real para garantir precisão nos cálculos.'
    },
    {
      title: 'Múltiplas Plataformas',
      content: 'Cada plataforma tem taxas diferentes. Compare os resultados antes de escolher onde vender.'
    },
    {
      title: 'Custos Ocultos',
      content: 'Sempre inclua custos como frete, impostos e embalagem nos "Custos Adicionais".'
    }
  ];

  const toggleExpanded = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
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
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Central de Ajuda</h1>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Bem-vindo à Central de Ajuda do DropCalc! 👋
            </h2>
            <p className="text-gray-600">
              Aqui você encontra tutoriais completos, dicas práticas e tudo que precisa para 
              dominar a calculadora de precificação e maximizar seus lucros no dropshipping.
            </p>
          </motion.div>

          {/* Tutorials Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📚 Tutoriais Passo a Passo</h2>
            
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleExpanded(tutorial.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {tutorial.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 text-left">
                      {tutorial.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedItem === tutorial.id ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedItem === tutorial.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6 pt-4">
                        <div className="space-y-3 mb-4">
                          {tutorial.content.map((step, stepIndex) => (
                            <motion.p
                              key={stepIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: stepIndex * 0.1 }}
                              className="text-gray-700"
                            >
                              {step}
                            </motion.p>
                          ))}
                        </div>
                        
                        {tutorial.videoUrl && (
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                          >
                            <PlayCircle className="w-5 h-5" />
                            Assistir vídeo tutorial
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💡 Dicas Rápidas</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {quickTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg"
                >
                  <h4 className="font-semibold text-gray-800 mb-2">{tip.title}</h4>
                  <p className="text-gray-600 text-sm">{tip.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support Section */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);
              const nome = formData.get('nome');
              const email = formData.get('email');
              const mensagem = formData.get('mensagem');
              try {
                await fetch('https://formspree.io/f/xwkzqgqg', {
                  method: 'POST',
                  headers: { 'Accept': 'application/json' },
                  body: JSON.stringify({ nome, email, mensagem })
                });
                alert('Mensagem enviada com sucesso!');
                form.reset();
              } catch {
                alert('Erro ao enviar mensagem. Tente novamente.');
              }
            }}
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-2">Ainda precisa de ajuda?</h3>
            <p className="mb-4 opacity-90">
              Nossa equipe de suporte está sempre pronta para ajudar você a aproveitar ao máximo o DropCalc.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input name="nome" required placeholder="Seu nome" className="p-3 rounded-xl text-gray-800" />
              <input name="email" required type="email" placeholder="Seu e-mail" className="p-3 rounded-xl text-gray-800" />
              <input name="mensagem" required placeholder="Sua mensagem" className="p-3 rounded-xl text-gray-800" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Help;