import {Wrapper} from './styles'
import {Link} from 'components/shared'

const AppInfo = () => {
  return (
    <Wrapper>
      <p>
        All the data has been collected from the{' '}
        <Link href="https://developer.spotify.com/"> Spotify Api.</Link>
        <br />
        Feel free to use this project on{' '}
        <Link href="https://github.com/stavelmashally/music-analyzer">
          GitHub.
        </Link>
      </p>
    </Wrapper>
  )
}

export default AppInfo
