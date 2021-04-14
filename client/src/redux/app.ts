import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from './store'
import {Artist, Suggestion} from 'types/artist.model'
import {generateColor} from 'utils/colorUtills'
import axios from 'axios'

type fetchSuggestionsError = {
  message: string
}

export interface AppState {
  data: Suggestion[]
  selected: Artist[]
  related: Artist[]
  status: 'idle' | 'loading'
  error: string | null
}

const initialState: AppState = {
  data: [],
  selected: [],
  related: [],
  status: 'idle',
  error: null,
}

export const fetchSuggestions = createAsyncThunk<
  Suggestion[],
  string,
  {rejectValue: fetchSuggestionsError}
>('app/fetchSuggestions', async (name: string, thunkApi) => {
  try {
    const res = await axios.get(`/api/suggestions?name=${name}`)
    return res.data.suggestions
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Please provide a valid english artist name',
    })
  }
})

export const fetchArtistData = createAsyncThunk<
  Artist,
  string,
  {rejectValue: fetchSuggestionsError}
>('app/fetchArtistData', async (id: string, thunkApi) => {
  try {
    const res = await axios.get(`/api/artist-data?id=${id}`)
    return res.data.artistData
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Failed to add artist',
    })
  }
})

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addArtist: (state, {payload}: PayloadAction<Artist>) => {
      const exists = state.selected.find(artist => artist.id === payload.id)
      if (!exists) {
        state.selected.push({...payload, color: generateColor()})
        state.related = state.selected[
          state.selected.length - 1
        ].relatedArtists.map(artist => ({
          ...artist,
          color: generateColor(),
        }))
      }
      state.data = []
      state.status = 'idle'
    },
    deleteArtist: (state, {payload}: PayloadAction<string>) => {
      state.selected = state.selected.filter(artist => artist.id !== payload)
      if (state.selected.length === 0) {
        state.related = []
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSuggestions.pending, state => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchSuggestions.fulfilled, (state, {payload}) => {
      state.data = payload
      state.status = 'idle'
    })
    builder.addCase(fetchSuggestions.rejected, (state, {payload}) => {
      if (payload) state.error = payload.message
      state.status = 'idle'
      state.data = []
    })
    builder.addCase(fetchArtistData.pending, state => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchArtistData.fulfilled, (state, action) => {
      appSlice.caseReducers.addArtist(state, action)
    })
    builder.addCase(fetchArtistData.rejected, (state, {payload}) => {
      if (payload) state.error = payload.message
      state.status = 'idle'
      state.data = []
    })
  },
})

export const {addArtist, deleteArtist} = appSlice.actions
export default appSlice.reducer

export const appSelector = (state: RootState) => state.app
export const selectedArtistsSelector = (state: RootState) => state.app.selected
