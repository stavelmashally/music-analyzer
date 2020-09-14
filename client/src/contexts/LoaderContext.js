import React, { useState, createContext } from 'react';
import Loader from '../components/Loader';

export const LoaderContext = createContext();
export const LoaderDispatcher = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={loading}>
      <LoaderDispatcher.Provider value={setLoading}>
        {children}
        <Loader showLoader={loading} />
      </LoaderDispatcher.Provider>
    </LoaderContext.Provider>
  );
};
