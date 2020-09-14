import React, { useState, createContext } from 'react';

export const SelectionsContext = createContext();
export const SelectionsDispatcher = createContext();

export const SelectionsProvider = ({ children }) => {
  const [selections, setSelections] = useState([]);

  return (
    <SelectionsContext.Provider value={selections}>
      <SelectionsDispatcher.Provider value={setSelections}>
        {children}
      </SelectionsDispatcher.Provider>
    </SelectionsContext.Provider>
  );
};
