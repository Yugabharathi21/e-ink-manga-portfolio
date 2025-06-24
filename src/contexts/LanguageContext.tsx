import React, { createContext, useContext, useState, useEffect } from 'react';
import locales, { Locale } from '../locales';

type LanguageContextType = {
  language: 'en' | 'jp';
  setLanguage: (lang: 'en' | 'jp') => void;
  locale: Locale;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const [locale, setLocale] = useState<Locale>(locales[language]);

  useEffect(() => {
    // Update locale when language changes
    setLocale(locales[language]);
    
    // Store language preference in localStorage
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  useEffect(() => {
    // Load language preference from localStorage on initial load
    const savedLanguage = localStorage.getItem('preferredLanguage') as 'en' | 'jp' | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'jp')) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, locale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
