import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit'
import {RootState} from '.'
import {Artist, Suggestion} from 'types/interfaces'
import {pushUnique, getNewRelatedArtists} from 'utils/arrayUtils'
import {generateColor} from 'utils/colorUtills'
import axios from 'axios'

type Error = {
  message: string
}

type Status = 'idle' | 'loading'

export interface AppState {
  suggestions: Suggestion[]
  selected: Artist[]
  related: Suggestion[]
  searchStatus: Status
  chartStatus: Status
  error: string | null
}

const initialState: AppState = {
  suggestions: [],
  selected: [],
  related: [],
  searchStatus: 'idle',
  chartStatus: 'idle',
  error: null,
}

export const fetchSuggestions = createAsyncThunk<
  Suggestion[],
  string,
  {rejectValue: Error}
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
  {rejectValue: Error}
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
      const artist = {...payload, color: generateColor()}
      state.selected = pushUnique(artist, state.selected)
      state.related = getNewRelatedArtists(state.selected)
      state.suggestions = []
      state.chartStatus = 'idle'
    },
    deleteArtist: (state, {payload}: PayloadAction<string>) => {
      state.selected = state.selected.filter(artist => artist.id !== payload)
      state.related = getNewRelatedArtists(state.selected)
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSuggestions.pending, state => {
      state.searchStatus = 'loading'
      state.error = null
    })
    builder.addCase(fetchSuggestions.fulfilled, (state, {payload}) => {
      state.suggestions = payload
      state.searchStatus = 'idle'
    })
    builder.addCase(fetchSuggestions.rejected, (state, {payload}) => {
      if (payload) state.error = payload.message
      state.searchStatus = 'idle'
      state.suggestions = []
    })
    builder.addCase(fetchArtistData.pending, state => {
      state.suggestions = []
      state.chartStatus = 'loading'
      state.error = null
    })
    builder.addCase(fetchArtistData.fulfilled, (state, action) => {
      appSlice.caseReducers.addArtist(state, action)
    })
    builder.addCase(fetchArtistData.rejected, (state, {payload}) => {
      if (payload) state.error = payload.message
      state.chartStatus = 'idle'
      state.suggestions = []
    })
  },
})

export const {addArtist, deleteArtist} = appSlice.actions
export default appSlice.reducer

export const appSelector = (state: RootState) => state.app
export const getSelected = (state: RootState) => state.app.selected

export const selectListState = createSelector(
  [getSelected, (state: RootState) => state.app.related],
  (selected, related) => ({selected, related}),
)

export const selectChartState = createSelector(
  [getSelected, (state: RootState) => state.app.chartStatus],
  (selected, chartStatus) => ({selected, chartStatus}),
)
