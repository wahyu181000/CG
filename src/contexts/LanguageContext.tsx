import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'no';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (en: string, no: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'no' : 'en');
  };

  const t = (en: string, no: string) => {
    return language === 'en' ? en : no;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
