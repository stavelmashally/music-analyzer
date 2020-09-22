import React, { useContext } from 'react';
import { ArtistContext } from '../../contexts/artists/ArtistContext';
import { SelectionsContext } from '../../contexts/selections/SelectionsContext';
import Artist from './Artist';

const ArtistList = () => {
  const { artists, setArtists } = useContext(ArtistContext);
  const { addSelection } = useContext(SelectionsContext);

  const handleSelection = artist => {
    addSelection(artist);
    setArtists([]);
  };

  const renderArtist = artist => (
    <Artist key={artist.id} artist={artist} onSelected={handleSelection} />
  );
  
  return artists.length ? (
    <div className="ui large middle aligned selection list">
      {artists.map(renderArtist)}
    </div>
  ) : null;
};

export default ArtistList;
