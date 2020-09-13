import React, { useContext } from 'react';
import { SelectionsContext } from '../contexts/SelectionsContext';
import Artist from './artists/Artist';

const Selections = () => {
  const [selections, setSelections] = useContext(SelectionsContext);

  const handleDelete = artist => {
    setSelections(prevSelections =>
      prevSelections.filter(({ id }) => id !== artist.id)
    );
  };

  const renderSelections = () => {
    return selections.map(artist => (
      <Artist key={artist.id} artist={artist} onArtistSelected={handleDelete} />
    ));
  };

  return (
    <ul className="ui large horizontal selection list">{renderSelections()}</ul>
  );
};

export default Selections;
