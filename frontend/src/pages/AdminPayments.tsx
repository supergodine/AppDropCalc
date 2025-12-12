import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { authService } from '../lib/auth';

interface PaymentItem {
  id: string;
  externalReference?: string;
  transaction_amount?: number;
  status?: string;
  mp_status?: string;
  createdAt?: string;
}

const AdminPayments: React.FC = () => {
  const [items, setItems] = useState<PaymentItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [tokenInput, setTokenInput] = useState('');
  const [isAdminLocal, setIsAdminLocal] = useState<boolean>(authService.isAdmin());
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const getToken = () => {
    return tokenInput.trim() || authService.getAccessToken() || '';
  };

  const fetchRefunded = async () => {
    setLoading(true);
    const token = getToken();
    if (!token) {
      toast.error('Token ausente. Cole um token admin ou faça login como admin.');
      setItems([]);
      setLoading(false);
      setIsTokenValid(false);
      return;
    }
    try {
      const res = await fetch(`${authService.getBaseURL()}/api/payments/admin/list?status=refunded`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 401) {
        setIsTokenValid(false);
        toast.error('401 Unauthorized — token inválido ou expirado');
        setItems([]);
        return;
      }
      if (!res.ok) throw new Error('Falha ao buscar pagamentos: ' + res.statusText);
      const data = await res.json();
      setItems(data || []);
      setIsTokenValid(true);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || String(err));
      setItems([]);
      setIsTokenValid(false);
    } finally {
      setLoading(false);
    }
  };

  const callDowngradeByPayment = async (paymentId: string) => {
    setActionLoading(paymentId);
    const token = getToken();
    try {
      const res = await fetch(`${authService.getBaseURL()}/api/payments/admin/downgrade-by-payment/${encodeURIComponent(paymentId)}`, {
        method: 'POST', headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || res.statusText || 'Erro no downgrade');
      }
      const data = await res.json();
      toast.success('Downgrade executado');
      await fetchRefunded();
      return data;
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || String(err));
    } finally {
      setActionLoading(null);
    }
  };

  const callDowngradeByUser = async (userId: string) => {
    setActionLoading(userId);
    const token = getToken();
    try {
      const res = await fetch(`${authService.getBaseURL()}/api/users/admin/downgrade/${encodeURIComponent(userId)}`, {
        method: 'POST', headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || res.statusText || 'Erro no downgrade');
      }
      const data = await res.json();
      toast.success('Downgrade por usuário executado');
      await fetchRefunded();
      return data;
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || String(err));
    } finally {
      setActionLoading(null);
    }
  };

  const validateToken = async () => {
    const token = getToken();
    if (!token) {
      setIsTokenValid(false);
      toast.error('Token ausente');
      return false;
    }
    try {
      const res = await fetch(`${authService.getBaseURL()}/api/users/me`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) {
        setIsTokenValid(false);
        toast.error('Token inválido ou expirado');
        return false;
      }
      const data = await res.json();
      const ok = data?.role === 'admin';
      setIsTokenValid(ok);
      setIsAdminLocal(ok);
      if (!ok) toast.error('Token válido, mas usuário não é admin');
      return ok;
    } catch (err: any) {
      console.error(err);
      setIsTokenValid(false);
      toast.error('Erro ao validar token');
      return false;
    }
  };

  const clearToken = () => {
    localStorage.removeItem('accessToken');
    setTokenInput('');
    setIsTokenValid(null);
    toast.success('Token removido do localStorage');
  }

  useEffect(() => {
    // prefer validar token antes de buscar
    (async () => {
      const ok = await validateToken();
      if (ok) await fetchRefunded();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If user is not admin, show a message
  if (!isAdminLocal) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Acesso administrativo</h2>
        <p className="mt-4">Esta área requer privilégios de administrador. Você pode validar um token admin abaixo.</p>

        <div className="mt-4 flex gap-2">
          <input className="flex-1 p-2 border rounded" placeholder="Cole token admin aqui" value={tokenInput} onChange={e => setTokenInput(e.target.value)} />
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={async () => { const ok = await validateToken(); if (ok) fetchRefunded(); }}>Validar Token</button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={clearToken}>Remover token local</button>
        </div>

        {isTokenValid === false && <p className="mt-3 text-sm text-red-600">Token inválido ou sem privilégios admin.</p>}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-4">Admin — Pagamentos estornados</motion.h1>

      <div className="mb-4 flex gap-3 items-center">
        <input value={tokenInput} onChange={e => setTokenInput(e.target.value)} placeholder="Cole token admin (opcional)" className="flex-1 p-2 border rounded" />
        <button onClick={fetchRefunded} className="px-4 py-2 bg-blue-600 text-white rounded">Atualizar</button>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow p-4">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-sm text-gray-600">
              <th className="py-2">ID</th>
              <th>ExternalRef</th>
              <th>Amount</th>
              <th>Status</th>
              <th>MP Status</th>
              <th>Criado</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr><td colSpan={7} className="py-4 text-gray-500">Carregando...</td></tr>
            )}
            {!loading && items.length === 0 && (
              <tr><td colSpan={7} className="py-4 text-gray-500">Nenhum pagamento encontrado.</td></tr>
            )}
            {items.map(p => {
              const userId = (p.externalReference || '').split('_').pop();
              return (
                <tr key={p.id} className="border-t">
                  <td className="py-2 text-sm text-gray-700">{p.id}</td>
                  <td className="py-2 text-sm">{p.externalReference}</td>
                  <td className="py-2 text-sm">{p.transaction_amount ?? '-'}</td>
                  <td className="py-2 text-sm">{p.status}</td>
                  <td className="py-2 text-sm">{p.mp_status}</td>
                  <td className="py-2 text-sm">{p.createdAt ? new Date(p.createdAt).toLocaleString() : '-'}</td>
                  <td className="py-2 text-sm flex gap-2">
                    <button onClick={() => { if (confirm('Executar downgrade por payment?')) callDowngradeByPayment(p.id); }} className="px-3 py-1 bg-red-600 text-white rounded">Downgrade por pagamento</button>
                    <button onClick={() => { if (!userId) return alert('ExternalReference inválido'); if (confirm('Executar downgrade por usuário?')) callDowngradeByUser(userId); }} className="px-3 py-1 bg-gray-600 text-white rounded">Downgrade por usuário</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPayments;
