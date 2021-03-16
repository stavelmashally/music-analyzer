import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addArtist} from '../../redux/artists'

import Artist from './Artist'
import Loader from '../Loader'

const ArtistList = () => {
  const {data, loading, error, selected} = useSelector(state => state.artists)
  const dispatch = useDispatch()

  const handleSelection = artist => {
    dispatch(addArtist(artist))
  }

  const renderArtist = artist => (
    <Artist key={artist.id} artist={artist} onSelected={handleSelection} />
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
