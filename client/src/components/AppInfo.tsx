import {AppInfoContainer, Link} from 'styles'

const AppInfo = () => {
  return (
    <AppInfoContainer>
      <p>
        All the data has been collected from the{' '}
        <Link href="https://developer.spotify.com/"> Spotify Api.</Link>
        <br />
        Feel free to use this project on{' '}
        <Link href="https://github.com/stavelmashally/music-analyzer">
          GitHub.
        </Link>
      </p>
    </AppInfoContainer>
  )
}

export default AppInfo
