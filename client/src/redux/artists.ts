import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Artist} from 'types/artist.model'
import {generateColor} from 'utils/colorUtills'

export interface ArtistsState {
  selected: Artist[]
}

const initialState: ArtistsState = {
  selected: [],
}

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    addArtist: (state, {payload}: PayloadAction<Artist>) => {
      state.selected.push({...payload, color: generateColor()})
    },
    deleteArtist: (state, {payload}: PayloadAction<string>) => {
      state.selected = state.selected.filter(artist => artist.id !== payload)
    },
  },
})

export const {addArtist, deleteArtist} = artistsSlice.actions
export default artistsSlice.reducer
