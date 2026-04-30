import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('fixpay-lang') || 'en');
  const [theme, setTheme] = useState(localStorage.getItem('fixpay-theme') || 'light');

  useEffect(() => {
    localStorage.setItem('fixpay-lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('fixpay-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider value={{ lang, theme, toggleLang, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
