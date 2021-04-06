import {ReactNode} from 'react'
import {useAppSelector, useAppDispatch} from 'redux/hooks'
import {addArtist, appSelector} from 'redux/app'
import {Artist} from 'types/artist.model'
import ArtistItem from './ArtistItem'
import Loader from 'components/Loader'

const ArtistList = () => {
  const {data, status, error} = useAppSelector(appSelector)
  const dispatch = useAppDispatch()

  const handleSelection = (artist: Artist) => {
    dispatch(addArtist(artist))
  }

  const artistListItems = data.map(artist => (
    <ArtistItem key={artist.id} artist={artist} onSelected={handleSelection} />
  ))

  let content
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
  } else {
    content = null
  }
  return content
}

export default ArtistList
