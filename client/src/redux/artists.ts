import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Artist} from 'types/artist.model'
import {generateColor} from 'utils/colorUtills'

export interface ArtistState {
  selected: Artist[]
}

const initialState: ArtistState = {
  selected: [],
}

const artistSlice = createSlice({
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

export const {addArtist, deleteArtist} = artistSlice.actions
export default artistSlice.reducer
