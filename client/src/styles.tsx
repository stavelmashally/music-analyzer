import styled from 'styled-components'

import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.background};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,
    Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    transition: all 0.25s linear;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${({theme}) => theme.text};
  }
  text {
    fill: ${({theme}) => theme.text};
  }

  strong, span, p, li {
    color: ${({theme}) => theme.text};
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.link};
    :visited {
      color: ${({theme}) => theme.link};
    }
  }
  `

export const AppContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`

