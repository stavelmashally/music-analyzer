import styled from 'styled-components'

export const Wrapper = styled.div`
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
