import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppDispatch} from './store'
import axios from 'axios'
import {Artist} from '../types/artist.model'

interface ArtistsError {
  error: string
}

interface ArtistsState {
  data: Artist[]
  selected: Artist[]
  loading: 'idle' | 'pending'
  error: ArtistsError | null
}

const initialState: ArtistsState = {
  data: [],
  selected: [],
  loading: 'idle',
  error: null,
}

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    artistsReceived: (state, {payload}: PayloadAction<Artist[]>) => {
      state.loading = 'idle'
      state.data = payload
    },
    artistsLoading: state => {
      state.loading = 'pending'
    },
    artistsError: (state, {payload}: PayloadAction<ArtistsError>) => {
      state.loading = 'idle'
      state.error = payload
    },
    addArtist: (state, {payload}: PayloadAction<Artist>) => {
      state.selected.push(payload)
      state.data = []
    },
    deleteArtist: (state, {payload}: PayloadAction<string>) => {
      state.selected = state.selected.filter(artist => artist.id !== payload)
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

export const fetchArtists = (name: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(artistsLoading())
    const res = await axios.get(`/api/artists?name=${name}`)
    const {artists} = res.data
    dispatch(artistsReceived(artists))
  } catch (error) {
    dispatch(artistsError(error.response.data.error))
  }
}
