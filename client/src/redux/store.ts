import {configureStore} from '@reduxjs/toolkit'
import appReducer from './app'
import artistsReducer from './artists'

const store = configureStore({
  reducer: {
    app: appReducer,
    artists: artistsReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
