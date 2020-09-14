import React from 'react';
import avatar from '../../images/avatar-placeholder.png';

const Artist = ({ artist, onArtistSelected, showDelete }) => {
  return (
    <div className="item" onClick={() => onArtistSelected(artist)}>
      <img
        src={artist.image ? artist.image.url : avatar}
        className="ui avatar image"
        alt="artist avatar"
      />
      <div className="content">
        <div className="header">
          {showDelete ? `${artist.name} x` : artist.name}
        </div>
      </div>
    </div>
  );
};

export default Artist;
