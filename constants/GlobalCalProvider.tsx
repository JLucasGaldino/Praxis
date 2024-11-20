import React from 'react';
import { CalProvider } from '@/constants/CalContext';

const GlobalCalProvider = ({ children }) => {
  return (
    <CalProvider>
      {children}
    </CalProvider>
  );
};

export default GlobalCalProvider;
