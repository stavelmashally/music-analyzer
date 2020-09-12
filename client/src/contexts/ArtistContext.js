import React, { useState, createContext } from 'react';

export const ArtistContext = createContext();

export const ArtistProvider = props => {
  const [artists, setArtists] = useState([]);
  
  return (
    <ArtistContext.Provider value={[artists, setArtists]}>
      {props.children}
    </ArtistContext.Provider>
  );
};
