import { Artist } from 'types/artist.model'
import { ListItem, ItemContent} from 'styles'
import avatar from 'images/avatar-placeholder.png'
interface ArtistItemProps {
  artist: Artist
  showDelete?: boolean
  onSelected: (artist: Artist) => void
}

const ArtistItem = ({artist, onSelected, showDelete}: ArtistItemProps) => {
  const title = showDelete ? `${artist.name} x` : artist.name
  const image = artist.image ? artist.image.url : avatar

  return (
    <ListItem onClick={() => onSelected(artist)}>
      <img src={image} className="ui avatar image" alt="artist avatar" />
      <ItemContent>
        <h4>{title}</h4>
      </ItemContent>
    </ListItem>
  )
}

export default ArtistItem
