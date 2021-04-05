import {configureStore} from '@reduxjs/toolkit'
import appReducer from './app'

const store = configureStore({
  reducer: {
    app: appReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
