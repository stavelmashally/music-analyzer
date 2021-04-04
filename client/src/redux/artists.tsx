import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppDispatch} from './store'
import axios from 'axios'
import {Artist} from 'types/artist.model'

interface ArtistsError {
  error: string
}

export interface ArtistsState {
  searchTerm: string
  data: Artist[]
  selected: Artist[]
  status: 'idle' | 'loading'
  error: ArtistsError | null
}

const initialState: ArtistsState = {
  searchTerm: '',
  data: [],
  selected: [],
  status: 'idle',
  error: null,
}

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    updateSearchTerm: (state, {payload}: PayloadAction<string>) => {
      state.searchTerm = payload
      if (payload === '') {
        state.error = null
        state.data = []
      }
    },
    artistsReceived: (state, {payload}: PayloadAction<Artist[]>) => {
      state.status = 'idle'
      state.data = payload
    },
    artistsLoading: state => {
      state.status = 'loading'
    },
    artistsError: (state, {payload}: PayloadAction<ArtistsError>) => {
      state.status = 'idle'
      state.error = payload
    },
    addArtist: (state, {payload}: PayloadAction<Artist>) => {
      state.selected.push(payload)
      state.searchTerm = ''
      state.data = []
    },
    deleteArtist: (state, {payload}: PayloadAction<string>) => {
      state.selected = state.selected.filter(artist => artist.id !== payload)
    },
  },
})

export const {
  updateSearchTerm,
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
