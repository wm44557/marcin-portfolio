import React, { useState } from 'react';

const LangContext = React.createContext();

export function LangProvider({ children }) {
  // we need to stick state in here
  const [current, setCurrent] = useState('pl');
  return (
    <LangContext.Provider value={[current, setCurrent]}>
      {children}
    </LangContext.Provider>
  );
}

export default LangContext;
