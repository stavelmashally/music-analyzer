import React, { useContext } from 'react';
import { SelectionsContext } from '../contexts/selections/SelectionsContext';
import Artist from './artists/Artist';

const SelectionList = () => {
  const { selections, deleteSelection } = useContext(SelectionsContext);

  const handleDelete = ({ id }) => deleteSelection(id);

  const renderArtist = artist => (
    <Artist
      key={artist.id}
      artist={artist}
      showDelete
      onSelected={handleDelete}
    />
  );

  return (
    <div className="ui large horizontal selection list">
      {selections.map(renderArtist)}
    </div>
  );
};

export default SelectionList;
