import {useApp} from 'contexts/AppContext'
import DarkModeToggle from 'react-dark-mode-toggle'
import {HeaderContainer, Logo} from 'styles'
import logo from 'images/audio-logo.png'

const Header = () => {
  const {theme, toggleTheme} = useApp()
  const isDarkMode = theme === 'dark'

  return (
    <HeaderContainer>
      <Logo>
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          style={{marginRight: '10px'}}
        />
        Music Analyzer
      </Logo>
      <DarkModeToggle onChange={toggleTheme} checked={isDarkMode} size={60} />
    </HeaderContainer>
  )
}

export default Header
