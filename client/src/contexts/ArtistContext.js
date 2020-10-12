import React, {createContext, useContext, useState} from 'react'
import {useAsyncReducer} from '../hooks/useAsyncReducer'
import axios from 'axios'

const ArtistContext = createContext()

const ArtistProvider = ({children}) => {
  const {data: artists, error, status, dispatch} = useAsyncReducer()
  const [selections, setSelections] = useState([])

  const value = {status, artists, error, dispatch, selections, setSelections}
  return (
    <ArtistContext.Provider value={value}>{children}</ArtistContext.Provider>
  )
}

async function fetchArtists(dispatch, artistName) {
  try {
    dispatch({type: 'pending'})
    const res = await axios.get(`/api/artists?name=${artistName}`)
    const {artists} = res.data
    dispatch({type: 'resolved', data: artists})
  } catch (error) {
    dispatch({type: 'rejected', error: error.response.data.error})
  }
}

function addSelection(setSelections, dispatch, artist) {
  setSelections(prev =>
    prev.some(({id}) => id === artist.id) ? prev : [...prev, artist],
  )
  dispatch({type: 'resolved', data: []})
}

function deleteSelection(setSelections, id) {
  setSelections(prev => prev.filter(artist => artist.id !== id))
}

function useArtist() {
  const context = useContext(ArtistContext)
  if (context === undefined) {
    throw new Error(`useArtist must be used within a ArtistProvider`)
  }
  return context
}

export {ArtistProvider, useArtist, fetchArtists, addSelection, deleteSelection}
