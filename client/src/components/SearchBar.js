import React, { useState, useContext } from 'react';
import { ArtistDispatcher } from '../contexts/ArtistContext';
import { LoaderDispatcher } from '../contexts/LoaderContext';
import axios from 'axios';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const setArtists = useContext(ArtistDispatcher);
  const setLoading = useContext(LoaderDispatcher);

  const updateTerm = e => {
    setTerm(e.target.value);
  };

  const fetchArtists = async () => {
    const artistName = term.trim();
    if (artistName.length) {
      setLoading(true);
      const res = await axios.get(`/api/artists?name=${term}`);
      const { artists } = res.data;
      setArtists(artists);
      setTerm('');
      setLoading(false);
    }
  };

  return (
    <div className="ui big fluid action input" style={{ marginTop: '30px' }}>
      <input
        type="text"
        placeholder="Artist name"
        value={term}
        onChange={updateTerm}
      />
      <button className="ui big button" onClick={fetchArtists}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
