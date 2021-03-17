import React from 'react'
import {useAppDispatch, useAppSelector} from '../../redux/hooks'
import {addArtist} from '../../redux/artists'
import {Artist} from '../../types/artist.model'
import ArtistItem from './ArtistItem'
import Loader from '../Loader'

const ArtistList = () => {
  const {data, loading, error} = useAppSelector(state => state.artists)
  const dispatch = useAppDispatch()

  const handleSelection = (artist: Artist) => {
    dispatch(addArtist(artist))
  }

  const renderArtist = (artist: Artist) => (
    <ArtistItem key={artist.id} artist={artist} onSelected={handleSelection} />
  )

  if (loading === 'pending') {
    return (
      <div style={{marginTop: '10px'}}>
        <Loader />
      </div>
    )
  } else if (error) {
    return <div className="ui red mini message">{error}</div>
  } else if (!error && data.length) {
    return (
      <div className="ui big middle aligned selection list">
        {data.map(renderArtist)}
      </div>
    )
  } else {
    return null
  }
}

export default ArtistList
