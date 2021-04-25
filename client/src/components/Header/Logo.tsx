import React from 'react'
import * as Styled from './styles'
import logo from 'images/audio-logo.png'

const Logo = () => {
  return (
    <Styled.LogoWrapper href="/">
      <Styled.Image src={logo} alt="logo" loading="lazy" />
      Music Analyzer
    </Styled.LogoWrapper>
  )
}

export default Logo
