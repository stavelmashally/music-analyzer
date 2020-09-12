import React, { useContext } from 'react';
import { ArtistContext } from '../../contexts/ArtistContext';
import { SelectionsContext } from '../../contexts/SelectionsContext';
import Artist from './Artist';

const ArtistList = () => {
  const [artists, setArtists] = useContext(ArtistContext);
  const [selections, setSelections] = useContext(SelectionsContext);

  const handleSelection = artist => {
    setSelections(prevSelections => [...prevSelections, artist]);
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
