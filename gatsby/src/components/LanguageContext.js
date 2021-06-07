import React, { useState } from 'react';

const LangContext = React.createContext();

export function LangProvider({ children }) {
  const [current, setCurrent] = useState('pl');
  return (
    <LangContext.Provider value={[current, setCurrent]}>
      {children}
    </LangContext.Provider>
  );
}

export default LangContext;
