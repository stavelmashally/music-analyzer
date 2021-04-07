import styled from 'styled-components'

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
  `

export const Input = styled.input`
  width: 100%;
  padding: 1%;
  outline: none;
  border-radius: 5px;
  font-size: 1.3rem;
  background: ${({theme}) => theme.secondary};
  color: ${({theme}) => theme.text};
  border: ${({theme}) => `1px solid ${theme.border}`};
  ::placeholder {
    color: ${({theme}) => theme.text};
    opacity: 0.5;
  }
  :focus {
    border: 1px solid #698cff;
  }
`
export const SearchBox = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: ${({theme}) => `1px solid ${theme.border}`};
  border-radius: 5px;
  padding: 1rem;
`

export const ListItem = styled.div`
  display: flex;
  cursor: pointer;
  padding: 1rem;
  :hover {
    background: #e9e9e9;
  }
`
export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.7rem;
`