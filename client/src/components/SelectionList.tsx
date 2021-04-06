import {useSelector, useDispatch} from 'react-redux'
import {deleteArtist, appSelector} from 'redux/app'
import {Artist} from 'types/artist.model'
import ArtistItem from './artists/ArtistItem'

const SelectionList = () => {
  const {selected} = useSelector(appSelector)
  const dispatch = useDispatch()

  const handleDelete = ({id}: Artist) => dispatch(deleteArtist(id))

  const selectedArtists = selected.map(artist => (
    <ArtistItem
      key={artist.id}
      artist={artist}
      showDelete
      onSelected={handleDelete}
    />
  ))

  return (
    <div className="ui big horizontal selection list">{selectedArtists}</div>
  )
}

export default SelectionList
