import {useAppDispatch, useAppSelector} from 'redux/hooks'
import {deleteArtist, selectedArtistsSelector} from 'redux/app'
import {Artist} from 'types/artist.model'
import ArtistItem from './ArtistItem'
import {HorizontalList} from 'styles'

const SelectionList = () => {
  const selected = useAppSelector(selectedArtistsSelector)
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

  return <HorizontalList>{selectedArtists}</HorizontalList>
}

export default SelectionList
