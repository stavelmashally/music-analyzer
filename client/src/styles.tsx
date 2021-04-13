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

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme}) => theme.primary};
  padding: 1rem;
  -webkit-box-shadow: 0px 6px 8px -1px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0px 6px 8px -1px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 6px 8px -1px rgba(0, 0, 0, 0.23);
`

export const Logo = styled.a`
  display: flex;
  text-decoration: none;
  color: white;
  font-size: 21px;
  :hover {
    color: white;
  }
  img {
    width: 30px;
    height: 30px;
  }
`

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 1%;
  outline: none;
  border-radius: 5px;
  font-size: 1.3rem;
  background: ${({theme}) => theme.surface};
  color: ${({theme}) => theme.text};
  border: ${({theme}) => `1px solid ${theme.border}`};
  ::placeholder {
    color: ${({theme}) => theme.text};
    opacity: 0.5;
  }
  :focus {
    border: 1px solid #698cff;
  }
  -webkit-box-shadow: 0px 0px 19px -15px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 19px -15px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 19px -15px rgba(0, 0, 0, 0.45);
  @media only screen and (max-width: 768px) {
    padding: 4%;
  }
`

export const SearchBox = styled.div<{show: boolean}>`
  position: absolute;
  width: inherit;
  z-index: 100;
  display: ${({show}) => (show ? 'flex' : 'none')};
  flex-direction: column;
  background: ${({theme}) => theme.surface};
  border: ${({theme}) => `1px solid ${theme.border}`};
  border-radius: 5px;
  padding: 1rem;
  -webkit-box-shadow: 3px 6px 27px -16px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 3px 6px 27px -16px rgba(0, 0, 0, 0.45);
  box-shadow: 3px 6px 27px -16px rgba(0, 0, 0, 0.45);
`

export const HorizontalList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 1rem;
  div {
    margin-right: 1rem;
  }
`
export const DeleteIcon = styled.span``

export const ListItem = styled.div<{transparent: boolean}>`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 10px;
  opacity: ${({transparent}) => (transparent ? '0.3' : '1')};
  :hover {
    background: ${({theme}) => theme.hover};
  }
  img {
    width: 35px;
    height: 35px;
    border-radius: 50px;
  }
`

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.6rem;
`

export const SuggetionListItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 10px;
  :hover {
    background: ${({theme}) => theme.hover};
  }
  img {
    width: 35px;
    height: 35px;
    border-radius: 50px;
  }
`

export const Error = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  color: red;
`

export const PlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 22px;
    font-weight: bold;
  }
`
export const ChartSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
export const ToolTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  padding: 1rem;
  font-size: 1rem;
  background: ${({theme}) => theme.surface};
  -webkit-box-shadow: 3px 6px 27px -16px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 3px 6px 27px -16px rgba(0, 0, 0, 0.45);
  box-shadow: 3px 6px 27px -16px rgba(0, 0, 0, 0.45);
`

export const SearchIconSvg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  width: 7em;
  height: 7em;
  padding: 1rem;
`
export const Link = styled.a.attrs({target: '_blank', rel: 'noreferrer'})``

export const Loader = styled.div`
  width: 49px;
  height: 49px;
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
export const AppInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  margin-bottom: 1rem;
  color: ${({theme}) => theme.text};
  font-size: 14px;
  @media only screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`
