import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Zap, ArrowRight } from 'lucide-react';

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo and Title */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DropCalc v2.0 - TESTE DEPLOY
            </h1>
          </motion.div>

          {/* Main message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
          >
            Bem-vindo ao <span className="font-semibold text-blue-600">DropCalc</span> — 
            a calculadora inteligente para precificar seus produtos de dropshipping com precisão.
            <br />
            <span className="text-lg text-gray-500 mt-2 block">
              Crie sua conta e escolha o plano ideal para você!
            </span>
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">Precificação Inteligente</h3>
              <p className="text-gray-600 text-sm">Calcule margens, taxas e preços finais automaticamente</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <Zap className="w-8 h-8 text-purple-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">Múltiplas Plataformas</h3>
              <p className="text-gray-600 text-sm">Suporte para Shopify, Mercado Livre, Nuvemshop e mais</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <Calculator className="w-8 h-8 text-indigo-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">Conversão de Moedas</h3>
              <p className="text-gray-600 text-sm">Trabalhe com mais de 70 moedas diferentes</p>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
              >
                Entrar
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link to="/login?mode=signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 w-full sm:w-auto"
              >
                Criar conta
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;