import {Artist} from 'types/artist.model'
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
    <div className="item" onClick={() => onSelected(artist)}>
      <img src={image} className="ui avatar image" alt="artist avatar" />
      <div className="content">
        <div className="header">
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  )
}

export default ArtistItem
