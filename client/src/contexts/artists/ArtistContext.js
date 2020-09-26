import React, { useReducer, createContext } from 'react';
import { LOADING, SET_ARTISTS, FETCH_FAILURE } from './types';
import artistsReducer from './artistsReducer';
import axios from 'axios';

const initialState = {
  artists: [],
  isLoading: false,
  error: null,
};

export const ArtistContext = createContext(initialState);

export const ArtistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(artistsReducer, initialState);

  // Actions
  async function fetchArtists(name) {
    try {
      dispatch({ type: LOADING, payload: true });
      const res = await axios.get(`/api/artists?name=${name}`);
      const { artists } = res.data;
      dispatch({ type: SET_ARTISTS, payload: artists });
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, payload: error.response.data.error });
    }
  }

  function setArtists(artists) {
    dispatch({ type: SET_ARTISTS, payload: artists });
  }

  return (
    <ArtistContext.Provider
      value={{
        artists: state.artists,
        isLoading: state.isLoading,
        error: state.error,
        setArtists,
        fetchArtists,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
