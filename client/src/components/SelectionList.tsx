import {useAppDispatch, useAppSelector} from 'redux/hooks'
import {deleteArtist, fetchArtistData, appSelector} from 'redux/app'
import ArtistItem from './ArtistItem'
import {HorizontalList} from 'styles'

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
    <ArtistItem
      key={artist.id}
      artist={artist}
      showDelete
      onSelected={handleDeleteArtist}
    />
  ))
  const relatedArtists = related.map(artist => (
    <ArtistItem
      key={artist.id}
      artist={artist}
      related
      onSelected={handleAddArtist}
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
