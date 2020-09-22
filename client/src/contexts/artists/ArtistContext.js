import React, { useReducer, createContext, useState} from 'react';
import artistsReducer from './artistsReducer';
import Loader from '../../components/Loader';
import axios from 'axios';

export const SET_ARTISTS = 'set_artists';
export const FETCH_FAILURE = 'fetch_failure';

const initialState = {
  artists: [],
  error: null,
};

export const ArtistContext = createContext(initialState);

export const  ArtistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(artistsReducer, initialState);
  const [loading, setLoading] = useState(false);

  // Actions
  async function fetchArtists(name) {
    try {
      setLoading(true);
      const res = await axios.get(`/api/artists?name=${name}`);
      const { artists } = res.data;
      dispatch({ type: SET_ARTISTS, payload: artists });
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, payload: error.response.data.error });
    }
    setLoading(false);
  }

  function setArtists(artists) {
    dispatch({ type: SET_ARTISTS, payload: artists });
  }

  return (
    <ArtistContext.Provider
      value={{
        artists: state.artists,
        error: state.error,
        setArtists,
        fetchArtists,
      }}
    >
      {children}
      {loading && <Loader />}
    </ArtistContext.Provider>
  );
};
