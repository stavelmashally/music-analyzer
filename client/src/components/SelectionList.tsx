import {useAppDispatch, useAppSelector} from 'redux/hooks'
import {deleteArtist, addArtist, appSelector} from 'redux/app'
import ArtistItem from './ArtistItem'
import {HorizontalList} from 'styles'

const SelectionList = () => {
  const {selected, related} = useAppSelector(appSelector)
  const dispatch = useAppDispatch()

  const selectedArtists = selected.map(artist => (
    <ArtistItem
      key={artist.id}
      artist={artist}
      showDelete
      onSelected={() => dispatch(deleteArtist(artist.id))}
    />
  ))
  const relatedArtists = related.map(artist => (
    <ArtistItem
      key={artist.id}
      artist={artist}
      related
      onSelected={() => dispatch(addArtist(artist))}
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
