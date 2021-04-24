import styled from 'styled-components'

export const ListItemWrapper = styled.li<{transparent?: boolean}>`
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
