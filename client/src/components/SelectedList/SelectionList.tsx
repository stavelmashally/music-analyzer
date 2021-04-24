import {useAppDispatch, useAppSelector} from 'redux/hooks'
import {deleteArtist, fetchArtistData, appSelector} from 'redux/app'
import {ListItem} from 'components/shared'
import {HorizontalList} from './styles'
import avatar from 'images/avatar-placeholder.png'

const SelectionList = () => {
  const {selected, related} = useAppSelector(appSelector)
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

export default SelectionList
