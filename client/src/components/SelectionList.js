import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteArtist} from '../redux/artists'
import Artist from './artists/Artist'

const SelectionList = () => {
  const {selected} = useSelector(state => state.artists)
  const dispatch = useDispatch()

  const handleDelete = ({id}) => dispatch(deleteArtist(id))
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
      {selected.map(renderArtist)}
    </div>
  )
}

export default SelectionList
