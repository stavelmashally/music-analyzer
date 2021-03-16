import { configureStore } from '@reduxjs/toolkit'
import artistsReducer from './artists'

export default configureStore({
  reducer: {
    artists: artistsReducer
  }
})