import React from 'react'
import avatar from '../../images/avatar-placeholder.png'

const Artist = ({artist, onSelected, showDelete}) => {
  return (
    <div className="item" onClick={() => onSelected(artist)}>
      <img
        src={artist.image ? artist.image.url : avatar}
        className="ui avatar image"
        alt="artist avatar"
      />
      <div className="content">
        <div className="header">
          <h4>{showDelete ? `${artist.name} x` : artist.name}</h4>
        </div>
      </div>
    </div>
  )
}

export default Artist
