import React, { useState, useContext } from 'react';
import { ArtistContext } from '../contexts/artists/ArtistContext';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  const { fetchArtists, error } = useContext(ArtistContext);

  const updateTerm = e => setTerm(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    const artistName = term.trim();
    if (artistName.length) fetchArtists(artistName);
    setTerm('');
  };

  return (
    <div>
      <form
        className="ui big fluid action input"
        style={{ marginTop: '30px' }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Artist name"
          value={term}
          onChange={updateTerm}
        />
        <button className="ui big button" type="submit">
          Search
        </button>
      </form>
      {error && <div className="ui red mini message">{error}</div>}
    </div>
  );
};

export default SearchBar;
