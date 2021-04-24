import styled from 'styled-components'

export const Loader = styled.div<{big?: boolean}>`
  width: ${({big}) => (big ? '80px' : '40px')};
  height: ${({big}) => (big ? '80px' : '40px')};
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
