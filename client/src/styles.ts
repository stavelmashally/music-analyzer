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
export const Link = styled.a.attrs({target: '_blank', rel: 'noreferrer'})``

export const Loader = styled.div.attrs({'aria-name': 'Loading'})<{
  $big?: boolean
}>`
  width: ${({$big}) => ($big ? '80px' : '40px')};
  height: ${({$big}) => ($big ? '80px' : '40px')};
  margin: 0 auto;
  border: 3px solid rgba(158, 158, 158, 0.97);
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: cssload-spin 575ms infinite linear;
  -o-animation: cssload-spin 575ms infinite linear;
  -ms-animation: cssload-spin 575ms infinite linear;
  -webkit-animation: cssload-spin 575ms infinite linear;
  -moz-animation: cssload-spin 575ms infinite linear;
  @keyframes cssload-spin {
    100% {
      transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-o-keyframes cssload-spin {
    100% {
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-ms-keyframes cssload-spin {
    100% {
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes cssload-spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes cssload-spin {
    100% {
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
