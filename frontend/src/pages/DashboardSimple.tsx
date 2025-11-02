import React from 'react';
import { useAuth } from '@/hooks/useAuth';

const DashboardSimple: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Dashboard Simples
        </h1>
        
        {user ? (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Bem-vindo!</h2>
            <p><strong>Nome:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>ID:</strong> {user.id}</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6">
            <p>Carregando dados do usuário...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSimple;