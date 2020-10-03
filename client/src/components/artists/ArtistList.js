import React, { useContext } from 'react';
import { ArtistContext, SelectionsContext } from '../../contexts';
import Artist from './Artist';
import Loader from '../Loader';

const ArtistList = () => {
  const { artists, setArtists, isLoading } = useContext(ArtistContext);
  const { addSelection } = useContext(SelectionsContext);

  const handleSelection = artist => {
    addSelection(artist);
    setArtists([]);
  };

  const renderArtist = artist => (
    <Artist key={artist.id} artist={artist} onSelected={handleSelection} />
  );

  if (isLoading)
    return (
      <div style={{ marginTop: '10px' }}>
        <Loader />
      </div>
    );

  return artists.length ? (
    <div className="ui big middle aligned selection list">
      {artists.map(renderArtist)}
    </div>
  ) : null;
};

export default ArtistList;
