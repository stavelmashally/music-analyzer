import {useReducer, useCallback} from 'react'

function asyncReducer(state, action) {
  switch (action.type) {
    case 'pending':
      return {status: 'pending', data: [], error: null}
    case 'resolved':
      return {status: 'resolved', data: action.data, error: null}
    case 'rejected':
      return {status: 'rejected', data: [], error: action.error}
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

function useAsyncReducer(initialState) {
  const [state, dispatch] = useReducer(asyncReducer, {
    status: 'idle',
    data: [],
    error: null,
    ...initialState,
  })

  const {data, error, status} = state

  const setData = useCallback(data => dispatch({type: 'resolved', data}), [
    dispatch,
  ])
  const setError = useCallback(error => dispatch({type: 'rejected', error}), [
    dispatch,
  ])

  return {
    setData,
    setError,
    error,
    status,
    data,
    dispatch,
  }
}

export {useAsyncReducer}
