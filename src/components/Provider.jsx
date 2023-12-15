'use client';
import React, { useState } from 'react';

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [openCalculator, setOpenCalculator] = useState(false);

  const calculatorHandler = () => {
    setOpenCalculator(!openCalculator);
  };

  return (
    <AuthContext.Provider
      value={{
        openCalculator,
        calculatorHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
