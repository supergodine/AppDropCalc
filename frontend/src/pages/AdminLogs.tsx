import React, { useEffect, useState } from 'react';
import { authService } from '../lib/auth';
import toast from 'react-hot-toast';

const AdminLogs: React.FC = () => {
  const [tokenValid, setTokenValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(25);
  const [total, setTotal] = useState(0);
  const [filters, setFilters] = useState({ action: '', adminId: '', startDate: '', endDate: '' });

  const validateToken = async () => {
    const token = authService.getToken();
    if (!token) return setTokenValid(false);
    try {
      const res = await fetch(`${authService.getBaseURL()}/users/me`, { headers: { Authorization: `Bearer ${token}` } });
      if (res.ok) setTokenValid(true);
      else setTokenValid(false);
    } catch (e) {
      setTokenValid(false);
    }
  };

  const fetchLogs = async (p = page) => {
    setLoading(true);
    const token = authService.getToken();
    if (!token) {
      toast.error('Token admin ausente');
      setLoading(false);
      return;
    }
    const qs = new URLSearchParams();
    qs.set('page', String(p));
    qs.set('limit', String(limit));
    if (filters.action) qs.set('action', filters.action);
    if (filters.adminId) qs.set('adminId', filters.adminId);
    if (filters.startDate) qs.set('startDate', filters.startDate);
    if (filters.endDate) qs.set('endDate', filters.endDate);

    try {
      const res = await fetch(`${authService.getBaseURL()}/admin-logs?${qs.toString()}`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('Failed to fetch logs');
      const json = await res.json();
      setLogs(json.data || []);
      setTotal(json.total || 0);
      setPage(json.page || p);
    } catch (e: any) {
      console.error(e);
      toast.error('Erro ao buscar logs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    validateToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tokenValid) fetchLogs(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenValid]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin — Auditoria</h2>
      {!tokenValid && (
        <div className="mb-4 text-red-600">Token ausente ou inválido. Cole um token admin válido em localStorage `accessToken`.</div>
      )}

      <div className="mb-4 flex gap-2">
        <input placeholder="Ação" value={filters.action} onChange={(e) => setFilters({ ...filters, action: e.target.value })} className="border p-2" />
        <input placeholder="AdminId" value={filters.adminId} onChange={(e) => setFilters({ ...filters, adminId: e.target.value })} className="border p-2" />
        <input type="date" value={filters.startDate} onChange={(e) => setFilters({ ...filters, startDate: e.target.value })} className="border p-2" />
        <input type="date" value={filters.endDate} onChange={(e) => setFilters({ ...filters, endDate: e.target.value })} className="border p-2" />
        <button onClick={() => fetchLogs(1)} className="bg-blue-600 text-white px-4 py-2 rounded">Filtrar</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-2 py-1">Criado</th>
              <th className="border px-2 py-1">Admin</th>
              <th className="border px-2 py-1">Ação</th>
              <th className="border px-2 py-1">TargetUser</th>
              <th className="border px-2 py-1">TargetPayment</th>
              <th className="border px-2 py-1">Metadata</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((l) => (
              <tr key={l.id}>
                <td className="border px-2 py-1">{new Date(l.createdAt).toLocaleString()}</td>
                <td className="border px-2 py-1">{l.adminId}</td>
                <td className="border px-2 py-1">{l.action}</td>
                <td className="border px-2 py-1">{l.targetUserId || '—'}</td>
                <td className="border px-2 py-1">{l.targetPaymentId || '—'}</td>
                <td className="border px-2 py-1"><pre className="max-w-xs truncate">{JSON.stringify(l.metadata)}</pre></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <button disabled={page <= 1 || loading} onClick={() => fetchLogs(page - 1)} className="px-3 py-1 border rounded">Anterior</button>
        <span>Pagina {page} / {Math.max(1, Math.ceil(total / limit))} — {total} registros</span>
        <button disabled={page >= Math.ceil(total / limit) || loading} onClick={() => fetchLogs(page + 1)} className="px-3 py-1 border rounded">Próxima</button>
      </div>
    </div>
  );
};

export default AdminLogs;
