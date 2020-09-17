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

  const renderArtist = artist => (
    <Artist
      key={artist.id}
      artist={artist}
      onArtistSelected={handleSelection}
    />
  );

  return artists.length ? (
    <div className="ui large middle aligned selection list">
      {artists.map(renderArtist)}
    </div>
  ) : null;
};

export default ArtistList;
