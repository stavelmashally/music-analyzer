import * as Styled from './styles'
import {Link} from 'styles'

const AppInfo = () => {
  return (
    <Styled.Wrapper>
      <p>
        All the data has been collected from the{' '}
        <Link href="https://developer.spotify.com/"> Spotify Api.</Link>
        <br />
        Feel free to use this project on{' '}
        <Link href="https://github.com/stavelmashally/music-analyzer">
          GitHub.
        </Link>
      </p>
    </Styled.Wrapper>
  )
}

export default AppInfo
