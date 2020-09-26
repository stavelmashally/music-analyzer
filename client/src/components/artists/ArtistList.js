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
  console.log('ArtistList render');

  if (isLoading) return <Loader/>;

  return artists.length ? (
    <div className="ui large middle aligned selection list">
      {artists.map(renderArtist)}
    </div>
  ) : null;
};

export default ArtistList;
