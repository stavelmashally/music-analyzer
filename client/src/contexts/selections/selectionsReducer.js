import { ADD_SELECTION, DELETE_SELECTION } from './SelectionsContext';

export default (state, {type, payload}) => {
  switch (type) {
    case ADD_SELECTION:
      const exists = !!state.selections.find(({ id }) => payload.id === id);
      return {
        ...state,
        selections: !exists
          ? [...state.selections, payload]
          : [...state.selections],
      };

    case DELETE_SELECTION:
      return {
        ...state,
        selections: state.selections.filter(
          artist => artist.id !== payload
        ),
      };
    default:
      return state;
  }
};
