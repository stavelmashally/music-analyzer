import {render} from '@testing-library/react'
import {Provider} from 'react-redux'
import reducer from 'store/app'
import {createStore, StoreEnhancer} from 'redux'

export function renderWithRedux(
  ui: JSX.Element,
  options: {initialState?: object} = {},
) {
  const store = createStore(reducer, options.initialState as StoreEnhancer)
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}