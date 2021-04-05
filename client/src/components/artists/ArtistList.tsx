import {useAppSelector, useAppDispatch} from 'hooks/reduxHooks'
import {addArtist} from 'redux/artists'
import {clearResults} from 'redux/app'
import {Artist} from 'types/artist.model'
import ArtistItem from './ArtistItem'
import Loader from 'components/Loader'

const ArtistList = () => {
  const {data, status, error} = useAppSelector()
  const dispatch = useAppDispatch()

  const handleSelection = (artist: Artist) => {
    dispatch(clearResults())
    dispatch(addArtist(artist))
  }

  const artistListItems = data.map(artist => (
    <ArtistItem key={artist.id} artist={artist} onSelected={handleSelection} />
  ))

  let content = null
  if (status === 'loading') {
    content = (
      <div style={{marginTop: '10px'}}>
        <Loader />
      </div>
    )
  } else if (error) {
    content = <div className="ui red mini message">{error}</div>
  } else if (data.length) {
    content = (
      <div className="ui big middle aligned selection list">
        {artistListItems}
      </div>
    )
  }

  return content
}

export default ArtistList
