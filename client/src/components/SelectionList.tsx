import { useArtistSelector } from 'hooks/useArtistSelector'
import {useAppDispatch} from 'hooks/useAppDispatch'
import {deleteArtist} from 'redux/artists'
import {Artist} from 'types/artist.model'
import ArtistItem from './artists/ArtistItem'

const SelectionList = () => {
  const {selected} = useArtistSelector()
  const dispatch = useAppDispatch()

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
