import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from './store'
import {Artist} from 'types/artist.model'
import {generateColor} from 'utils/colorUtills'
import axios from 'axios'

type fetchArtistsError = {
  message: string
}

export interface AppState {
  data: Artist[]
  selected: Artist[]
  status: 'idle' | 'loading'
  error: string | null
}

const initialState: AppState = {
  data: [],
  selected: [],
  status: 'idle',
  error: null,
}

export const fetchArtists = createAsyncThunk<
  Artist[],
  string,
  {rejectValue: fetchArtistsError}
>('app/fetchArtists', async (name: string, thunkApi) => {
  try {
    const res = await axios.get(`/api/artists?name=${name}`)
    return res.data.artists
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Please provide a valid english artist name',
    })
  }
})

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addArtist: (state, {payload}: PayloadAction<Artist>) => {
      const exists = state.selected.find(artist => artist.id === payload.id)
      if (!exists) {
        state.selected.push({...payload, color: generateColor()})
      }
      state.data = []
    },
    deleteArtist: (state, {payload}: PayloadAction<string>) => {
      state.selected = state.selected.filter(artist => artist.id !== payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchArtists.pending, state => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchArtists.fulfilled, (state, {payload}) => {
      state.data = payload
      state.status = 'idle'
    })
    builder.addCase(fetchArtists.rejected, (state, {payload}) => {
      if (payload) state.error = payload.message
      state.status = 'idle'
      state.data = []
    })
  },
})

export const {addArtist, deleteArtist} = AppSlice.actions
export default AppSlice.reducer

export const appSelector = (state: RootState) => state.app
export const selectedArtistsSelector = (state: RootState) => state.app.selected
