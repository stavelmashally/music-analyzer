import React, { useState, useContext } from 'react';
import { ArtistContext } from '../contexts/ArtistContext';
import { LoaderContext } from '../contexts/LoaderContext';
import axios from 'axios';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [artists, setArtists] = useContext(ArtistContext);
  const [loading, setLoading] = useContext(LoaderContext);

  const updateTerm = e => {
    setTerm(e.target.value);
  };

  const fetchArtists = async () => {
    if (term.length) {
      setLoading(true);
      const res = await axios.get(`/api/artists?name=${term}`);
      setArtists(prevArtists => res.data.artists);
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