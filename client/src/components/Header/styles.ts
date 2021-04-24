import styled from 'styled-components'

export const Wrapper = styled.header`
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
export const LogoWrapper = styled.a`
  display: flex;
  text-decoration: none;
  color: white;
  font-size: 21px;
  :hover {
    color: white;
  }
  :visited {
    color: white;
  }
  img {
    width: 30px;
    height: 30px;
  }
`
