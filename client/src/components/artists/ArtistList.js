import React from 'react'
import {useArtist, addSelection} from '../../contexts/ArtistContext'

import Artist from './Artist'
import Loader from '../Loader'

const ArtistList = () => {
  const {status, artists, error, dispatch, setSelections} = useArtist()

  const handleSelection = artist => {
    addSelection(setSelections, dispatch, artist)
  }

  const renderArtist = artist => (
    <Artist key={artist.id} artist={artist} onSelected={handleSelection} />
  )

  if (status === 'pending') {
    return (
      <div style={{marginTop: '10px'}}>
        <Loader />
      </div>
    )
  } else if (status === 'rejected') {
    return <div className="ui red mini message">{error}</div>
  } else if (status === 'resolved') {
    return (
      <div className="ui big middle aligned selection list">
        {artists.map(renderArtist)}
      </div>
    )
  } else {
    return null
  }
}

export default ArtistList
