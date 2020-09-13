import React, { useState, createContext } from 'react';
import Loader from '../components/Loader';

export const LoaderContext = createContext();

export const LoaderProvider = props => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={[loading, setLoading]}>
      {props.children}
      <Loader showLoader={loading} />
    </LoaderContext.Provider>
  );
};
