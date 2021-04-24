import styled from 'styled-components'

export const HorizontalList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding: 0;
  list-style-type: none;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`