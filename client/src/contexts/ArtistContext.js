import React, { useState, createContext } from 'react';

export const ArtistContext = createContext();
export const ArtistDispatcher = createContext();

export const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);

  return (
    <ArtistContext.Provider value={artists}>
      <ArtistDispatcher.Provider value={setArtists}>
        {children}
      </ArtistDispatcher.Provider>
    </ArtistContext.Provider>
  );
};
