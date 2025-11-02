import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Calculator from './components/Calculator';
import LanguageSelector from './components/LanguageSelector';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            🚀 DropCalc - Multi-language Support
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LanguageSelector />
            <Calculator />
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;