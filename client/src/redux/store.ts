import {configureStore} from '@reduxjs/toolkit'
import appReducer from './app'
import artistReducer from './artists'

const store = configureStore({
  reducer: {
    app: appReducer,
    artist: artistReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store