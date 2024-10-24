import React from 'react';
import { LanguageProvider } from '@/constants/LanguageContext';

const Provider = ({ children }) => {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
};

export default Provider;
