import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { saveUserPlanToFirestore } from '../services/userPlan';
import { useAuth } from '../hooks/useAuth';

// Página de sucesso do pagamento Mercado Pago
const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Recupera dados da preferência do Mercado Pago via query params
    const params = new URLSearchParams(window.location.search);
    const planRef = params.get('external_reference');
    const paymentStatus = params.get('collection_status');
    // Exemplo: external_reference = gold_123456
    if (planRef && paymentStatus === 'approved' && user?.id) {
      const [planId] = planRef.split('_');
      // Ativa plano no Firestore
      const startDate = new Date();
      let period: 'monthly' | 'quarterly' | 'annual' = 'monthly';
      // Pode customizar para recuperar o período do plano
      const expirationDate = new Date(startDate);
      expirationDate.setDate(startDate.getDate() + 30);
      saveUserPlanToFirestore({
        userId: user.id,
        planId,
        period,
        startDate: startDate.toISOString(),
        expirationDate: expirationDate.toISOString()
      });
      toast.success('Pagamento aprovado! Plano ativado.');
      setTimeout(() => {
        navigate('/'); // Redireciona para a Calculadora
      }, 2000);
    } else {
      toast.error('Não foi possível ativar o plano.');
      setTimeout(() => {
        navigate('/payment');
      }, 2000);
    }
  }, [navigate, user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Processando pagamento...</h1>
      <p>Aguarde, estamos ativando seu plano.</p>
    </div>
  );
};

export default PaymentSuccess;
