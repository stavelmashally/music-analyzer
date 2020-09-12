import React, { useState, createContext } from 'react';

export const SelectionsContext = createContext();

export const SelectionsProvider = props => {
  const [selections, setSelections] = useState([]);

  return (
    <SelectionsContext.Provider value={[selections, setSelections]}>
      {props.children}
    </SelectionsContext.Provider>
  );
};
