import React, { useState } from 'react';
import { useArtist, fetchArtists } from '../contexts/ArtistContext';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const { dispatch } = useArtist();

  const updateTerm = e => setTerm(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    const artistName = term.trim();
    if (!artistName) {
      return;
    }
    fetchArtists(dispatch, artistName);
    setTerm('');
  };

  return (
    <div>
      <form
        className="ui big fluid input"
        style={{ marginTop: '30px' }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Artist name"
          value={term}
          onChange={updateTerm}
        />
        <button className="ui violet big button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
