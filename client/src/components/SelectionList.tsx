import React from 'react'
import {useAppDispatch, useAppSelector} from '../redux/hooks'
import {deleteArtist} from '../redux/artists'
import {Artist} from '../types/artist.model'
import ArtistItem from './artists/ArtistItem'

const SelectionList = () => {
  const {selected} = useAppSelector(state => state.artists)
  const dispatch = useAppDispatch()

  const handleDelete = ({id}: Artist) => dispatch(deleteArtist(id))

  const renderArtist = (artist: Artist) => (
    <ArtistItem
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
