import React  from 'react';
import { useApp } from '../contexts/AppContext';
import DarkModeToggle from 'react-dark-mode-toggle';
import logo from '../images/audio-logo.png';

const Header = () => {
  const { theme, toggleTheme } = useApp();

  const isDarkMode = theme === 'dark';

  return (
    <div className="ui violet inverted big menu">
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
      <div className="right menu">
        <div className="menu item">
          <DarkModeToggle
            onChange={toggleTheme}
            checked={isDarkMode}
            size={60}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
