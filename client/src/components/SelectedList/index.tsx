import {useAppDispatch, useAppSelector} from 'store/hooks'
import {deleteArtist, fetchArtistData, selectListState} from 'store/app'
import ListItem from 'components/ListItem'
import {HorizontalList} from './styles'
import avatar from 'images/avatar-placeholder.png'

const SelectedList = () => {
  const {selected, related} = useAppSelector(selectListState)
  const dispatch = useAppDispatch()

  const handleDeleteArtist = (id: string) => {
    dispatch(deleteArtist(id))
  }

  const handleAddArtist = (id: string) => {
    dispatch(fetchArtistData(id))
  }

  const selectedArtists = selected.map(artist => (
    <ListItem
      key={artist.id}
      itemId={artist.id}
      image={artist.images[0]?.url || avatar}
      content={artist.name}
      onItemSelected={handleDeleteArtist}
    />
  ))

  const relatedArtists = related.map(artist => (
    <ListItem
      key={artist.id}
      itemId={artist.id}
      content={artist.name}
      transparent
      onItemSelected={handleAddArtist}
    />
  ))

  return (
    <HorizontalList>
      {selectedArtists}
      {relatedArtists}
    </HorizontalList>
  )
}

export default SelectedList
