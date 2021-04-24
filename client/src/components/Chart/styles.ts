import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 22px;
    font-weight: bold;
  }
`

export const ToolTipWrapper = styled.div`
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