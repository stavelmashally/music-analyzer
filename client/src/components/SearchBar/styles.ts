import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
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
    padding: 1rem;
  }
`

export const SuggestionsList = styled.ul`
  position: absolute;
  width: inherit;
  list-style-type: none;
  margin: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.surface};
  border: ${({theme}) => `1px solid ${theme.border}`};
  border-radius: 5px;
  padding: 1rem;
  -webkit-box-shadow: 3px 6px 27px -16px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 3px 6px 27px -16px rgba(0, 0, 0, 0.45);
  box-shadow: 3px 6px 27px -16px rgba(0, 0, 0, 0.45);
`

export const Error = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  color: red;
`
