import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${({theme}) => theme.text};
  }

  text {
    fill: ${({theme}) => theme.text};
  }

  .ui.input>input, .ui.input.focus>input, .ui.input>input:focus {
    background: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.text};
  }
  `
