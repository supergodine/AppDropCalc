import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_CONFIG } from '../config/api';

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const usersUrl = API_CONFIG.users.list;
      console.log('🔍 Buscando usuários em:', usersUrl);

      const response = await fetch(usersUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      console.error('Erro ao buscar usuários:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white flex items-center justify-center">
        <div className="text-xl">Carregando usuários...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white flex items-center justify-center">
        <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 max-w-md w-full mx-4">
          <h2 className="text-xl font-bold mb-2">Erro</h2>
          <p className="mb-4">{error}</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Voltar ao Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Usuários Cadastrados</h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            ← Voltar
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <div className="mb-4">
            <p className="text-lg">Total de usuários: <span className="font-bold text-yellow-300">{users.length}</span></p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-3 pr-4">Nome</th>
                  <th className="pb-3 pr-4">Email</th>
                  <th className="pb-3 pr-4">Data de Cadastro</th>
                  <th className="pb-3">Última Atualização</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="py-3 pr-4">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-300">ID: {user.id}</div>
                    </td>
                    <td className="py-3 pr-4">{user.email}</td>
                    <td className="py-3 pr-4">{formatDate(user.createdAt)}</td>
                    <td className="py-3">{formatDate(user.updatedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {users.length === 0 && (
            <div className="text-center py-8">
              <p className="text-xl text-gray-300">Nenhum usuário encontrado</p>
            </div>
          )}
        </div>

        <div className="mt-6 bg-blue-500/20 border border-blue-500 rounded-lg p-4">
          <p className="text-sm">
            <strong>Nota:</strong> Esta é uma página administrativa para visualizar todos os usuários cadastrados no sistema.
            Total atual: {users.length} usuário(s).
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
