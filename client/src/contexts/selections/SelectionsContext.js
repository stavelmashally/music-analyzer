import React, { useReducer, createContext } from 'react';
import selectionsReducer from './selectionsReducer';

export const ADD_SELECTION = 'update_selections';
export const DELETE_SELECTION = 'delete_selection';

const initialState = {
  selections: [],
};

export const SelectionsContext = createContext();

export const SelectionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(selectionsReducer, initialState);

  // Actions
  function addSelection(artist) {
    dispatch({ type: ADD_SELECTION, payload: artist });
  }

  function deleteSelection(id) {
    dispatch({ type: DELETE_SELECTION, payload: id });
  }

  return (
    <SelectionsContext.Provider
      value={{
        selections: state.selections,
        addSelection,
        deleteSelection,
      }}
    >
      {children}
    </SelectionsContext.Provider>
  );
};
