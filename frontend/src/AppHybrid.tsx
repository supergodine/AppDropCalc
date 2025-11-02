import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/hooks/useTheme';
import TestPage from '@/pages/TestPage';
import Welcome from '@/pages/Welcome';
import Login from '@/pages/Login';
import LoginSimple from '@/pages/LoginSimple';
import AuthCallback from '@/pages/AuthCallback';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import Payment from '@/pages/Payment';
import Settings from '@/pages/Settings';
import Help from '@/pages/Help';
import DashboardSimples from '@/pages/DashboardSimples';
import ErrorBoundary from '@/components/ErrorBoundary';

const AppHybrid: React.FC = () => {
  console.log('=== AppHybrid carregando ===');

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes que sabemos que funcionam */}
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-simple" element={<LoginSimple />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/dashboard" element={
              <ErrorBoundary>
                <DashboardSimples />
              </ErrorBoundary>
            } />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/welcome" replace />} />
            <Route path="*" element={<Navigate to="/welcome" replace />} />
          </Routes>
          
          {/* Toast notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
                borderRadius: '12px',
                padding: '16px',
              },
            }}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default AppHybrid;