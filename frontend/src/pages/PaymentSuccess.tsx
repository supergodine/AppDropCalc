import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import { API_CONFIG } from '../config/api';

// Página de sucesso do pagamento Mercado Pago
const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  const { user, refreshAuth } = useAuth();

  useEffect(() => {
    // Recupera dados da preferência do Mercado Pago via query params
    const params = new URLSearchParams(window.location.search);
    const planRef = params.get('external_reference');
    const paymentStatus = params.get('collection_status');
    // Exemplo: external_reference = gold_123456
    if (paymentStatus === 'approved') {
      (async () => {
        console.log('PaymentSuccess: collection_status=approved — fetching updated profile');

        const token = localStorage.getItem('accessToken');
        if (!token) {
          console.error('PaymentSuccess: no accessToken in localStorage');
          toast.error('Sessão expirada. Faça login e tente novamente.');
          navigate('/payment', { replace: true });
          return;
        }

        try {
          console.log('PaymentSuccess: Fetching updated profile from', API_CONFIG.users.profile);
          const res = await fetch(API_CONFIG.users.profile, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
            cache: 'no-store',
          });

          if (!res.ok) {
            const text = await res.text().catch(() => '<no-body>');
            console.error('PaymentSuccess: profile fetch failed', res.status, text);
            throw new Error('profile_fetch_failed');
          }

          const data = await res.json().catch(() => null);
          if (!data || !data.id) {
            console.error('PaymentSuccess: invalid profile data', data);
            throw new Error('invalid_profile');
          }

          // grava no localStorage
          localStorage.setItem('currentUser', JSON.stringify(data));
          if (data.plan) {
            localStorage.setItem('userPlan', JSON.stringify(data.plan));
          } else {
            console.warn('PaymentSuccess: profile has no plan field — leaving existing userPlan (if any)');
          }

          console.log('PaymentSuccess: Profile updated in localStorage');

          // Chama refreshAuth somente se já havia um user logado no hook
          if (user) {
            if (typeof refreshAuth === 'function') {
              try {
                console.log('PaymentSuccess: Calling refreshAuth() to update app state');
                refreshAuth();
                console.log('PaymentSuccess: refreshAuth() called');
              } catch (e) {
                console.warn('PaymentSuccess: refreshAuth threw an error', e);
              }
            } else {
              console.warn('PaymentSuccess: refreshAuth is not a function');
            }
          } else {
            console.log('PaymentSuccess: no local user in hook — skipping refreshAuth');
          }

          toast.success('Pagamento aprovado! Plano ativado.');
          // garante que o redirect só aconteça depois de tudo
          navigate('/', { replace: true });
        } catch (err) {
          console.error('PaymentSuccess: error processing successful payment return', err);
          toast.error('Não foi possível ativar o plano automaticamente. Recarregue ou faça login novamente.');
          navigate('/payment', { replace: true });
        }
      })();
    } else {
      console.warn('PaymentSuccess: collection_status !== approved', { collection_status: paymentStatus, planRef });
      toast.error('Não foi possível ativar o plano.');
      navigate('/payment', { replace: true });
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
