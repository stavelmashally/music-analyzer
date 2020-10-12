import React from 'react'
import {useArtist, deleteSelection} from '../contexts/ArtistContext'
import Artist from './artists/Artist'

const SelectionList = () => {
  const {selections, setSelections} = useArtist()

  const handleDelete = ({id}) => deleteSelection(setSelections, id)

  const renderArtist = artist => (
    <Artist
      key={artist.id}
      artist={artist}
      showDelete
      onSelected={handleDelete}
    />
  )

  return (
    <div className="ui big horizontal selection list">
      {selections.map(renderArtist)}
    </div>
  )
}

export default SelectionList
