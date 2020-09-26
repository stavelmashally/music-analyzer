import { FETCH_FAILURE, SET_ARTISTS, LOADING } from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        artists: action.payload,
        error: null,
        isLoading: false,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_FAILURE:
      return {
        artists: [],
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
