import { FETCH_FAILURE, SET_ARTISTS } from './ArtistContext';

export default (state, action) => {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        artists: action.payload,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        artists: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
