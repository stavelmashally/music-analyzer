import React, { useState, useContext } from 'react';
import { ArtistDispatcher } from '../contexts/ArtistContext';
import { LoaderDispatcher } from '../contexts/LoaderContext';
import axios from 'axios';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [error, setError] = useState(null);

  const setArtists = useContext(ArtistDispatcher);
  const setLoading = useContext(LoaderDispatcher);

  const updateTerm = e => {
    setTerm(e.target.value);
  };

  const fetchArtists = async e => {
    e.preventDefault();
    const artistName = term.trim();
    if (artistName.length) {
      setLoading(true);

      try {
        const res = await axios.get(`/api/artists?name=${term}`);
        const { artists } = res.data;
        setArtists(artists);
        setError(null);
      } catch (error) {
        setArtists([]);
        setError(error.response.data.error);
      }
    }
    setTerm('');
    setLoading(false);
  };

  return (
    <div>
      <form
        className="ui big fluid action input"
        style={{ marginTop: '30px' }}
        onSubmit={fetchArtists}
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
