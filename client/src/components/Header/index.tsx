import {useApp} from 'context/AppContext'
import DarkModeToggle from 'react-dark-mode-toggle'
import {Wrapper} from './styles'
import Logo from './Logo'

const Header = () => {
  const {theme, toggleTheme} = useApp()
  const isDarkMode = theme === 'dark'

  return (
    <Wrapper>
      <Logo />
      <DarkModeToggle onChange={toggleTheme} checked={isDarkMode} size={60} />
    </Wrapper>
  )
}

export default Header
