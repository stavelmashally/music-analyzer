import React, { useContext } from 'react';
import { ArtistContext, ArtistDispatcher } from '../../contexts/ArtistContext';
import { SelectionsDispatcher } from '../../contexts/SelectionsContext';
import Artist from './Artist';

const ArtistList = () => {
  const artists = useContext(ArtistContext);
  const setArtists = useContext(ArtistDispatcher);
  const setSelections = useContext(SelectionsDispatcher);

  const handleSelection = artist => {
    setSelections(prevSelections => {
      const exists = !!prevSelections.find(({ id }) => artist.id === id);
      return !exists ? [...prevSelections, artist] : [...prevSelections];
    });
    setArtists([]);
  };

  const renderArtists = () => {
    return artists.map(artist => (
      <Artist
        key={artist.id}
        artist={artist}
        onArtistSelected={handleSelection}
      />
    ));
  };

  return (
    <div className="ui large middle aligned selection list">
      {renderArtists()}
    </div>
  );
};

export default ArtistList;
