import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt' as const, name: 'PT', flag: '🇧🇷' },
    { code: 'en' as const, name: 'EN', flag: '🇺🇸' },
    { code: 'es' as const, name: 'ES', flag: '🇪🇸' }
  ];

  return (
    <div>
      <div style={{ fontSize: '12px', marginBottom: '8px', fontWeight: 'bold', color: '#666' }}>
        🌍 Idioma
      </div>
      
      <div style={{ display: 'flex', gap: '5px' }}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            style={{
              padding: '4px 8px',
              border: language === lang.code ? '2px solid #3b82f6' : '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: language === lang.code ? '#eff6ff' : 'white',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;