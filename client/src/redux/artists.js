import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const artistsSlice = createSlice({
  name: 'artists',
  initialState: {
    data: [],
    selected: [],
    loading: 'idle',
    error: null,
  },
  reducers: {
    artistsReceived: (state, action) => {
      state.loading = 'idle'
      state.data = action.payload
    },
    artistsLoading: (state, action) => {
      state.loading = 'pending'
    },
    artistsError: (state, action) => {
      state.loading = 'idle'
      state.error = action.payload
    },
    addArtist: (state, action) => {
      state.selected.push(action.payload)
      state.data = []
    },
    deleteArtist: (state, action) => {
      state.selected = state.selected.filter(
        artist => artist.id !== action.payload,
      )
    },
  },
})

export const {
  artistsReceived,
  artistsLoading,
  artistsError,
  addArtist,
  deleteArtist,
} = artistsSlice.actions
export default artistsSlice.reducer

export const fetchArtists = artistName => async dispatch => {
  try {
    dispatch(artistsLoading())
    const res = await axios.get(`/api/artists?name=${artistName}`)
    const {artists} = res.data
    dispatch(artistsReceived(artists))
  } catch (error) {
    dispatch(artistsError(error.response.data.error))
  }
}
