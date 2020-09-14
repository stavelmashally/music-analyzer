import React, { useContext } from 'react';
import {
  SelectionsContext,
  SelectionsDispatcher,
} from '../contexts/SelectionsContext';
import Artist from './artists/Artist';

const Selections = () => {
  const selections = useContext(SelectionsContext);
  const setSelections = useContext(SelectionsDispatcher);

  const handleDelete = artist => {
    setSelections(prevSelections =>
      prevSelections.filter(({ id }) => id !== artist.id)
    );
  };

  const renderSelections = () => {
    return selections.map(artist => (
      <Artist key={artist.id} artist={artist} showDelete onArtistSelected={handleDelete} />
    ));
  };

  return (
    <div className="ui large horizontal selection list">{renderSelections()}</div>
  );
};

export default Selections;
