import React from 'react';
import logo from '../images/audio-logo.png';

const Header = () => {
  return (
    <div className="ui inverted menu">
      <a className="header item" href="/">
        <img
          src={logo}
          className="ui mini image"
          alt="logo"
          loading="lazy"
          style={{ marginRight: '10px' }}
        />
        Music Analyzer
      </a>
    </div>
  );
};

export default Header;
