import React from 'react'
import {LogoWrapper} from './styles'
import logo from 'images/audio-logo.png'

const Logo = () => {
  return (
    <LogoWrapper href="/">
      <img src={logo} alt="logo" loading="lazy" style={{marginRight: '10px'}} />
      Music Analyzer
    </LogoWrapper>
  )
}

export default Logo
