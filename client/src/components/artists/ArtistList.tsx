import {useAppDispatch, useAppSelector} from 'redux/hooks'
import {addArtist} from 'redux/app'
import {Artist} from 'types/artist.model'
import ArtistItem from './ArtistItem'
import Loader from 'components/Loader'

const ArtistList = () => {
  const {data, status, error} = useAppSelector(state => state.app)
  const dispatch = useAppDispatch()

  const handleSelection = (artist: Artist) => {
    dispatch(addArtist(artist))
  }

  const renderArtist = (artist: Artist) => (
    <ArtistItem key={artist.id} artist={artist} onSelected={handleSelection} />
  )

  if (status === 'loading') {
    return (
      <div style={{marginTop: '10px'}}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return <div className="ui red mini message">{error}</div>
  }

  if (data.length) {
    return (
      <div className="ui big middle aligned selection list">
        {data.map(renderArtist)}
      </div>
    )
  }
  
  return null
}

export default ArtistList
