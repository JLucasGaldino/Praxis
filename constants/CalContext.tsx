import React, { createContext, useContext, useState } from 'react';

const CalContext = createContext();

export const CalProvider = ({ children }) => {
  const [calendar, setCalendar] = useState('jul'); // Default language

  return (
    <CalContext.Provider value={{ calendar, setCalendar }}>
      {children}
    </CalContext.Provider>
  );
};

export const useCalendar = () => {
  return useContext(CalContext);
};
