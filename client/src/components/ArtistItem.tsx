import {useState} from 'react'
import {Artist} from 'types/artist.model'
import {ListItem, ItemContent} from 'styles'
import avatar from 'images/avatar-placeholder.png'

interface ArtistItemProps {
  artist: Artist
  showDelete?: boolean
  related?: boolean
  onSelected: (artist: Artist) => void
}

const ArtistItem = ({
  artist,
  onSelected,
  showDelete,
  related,
}: ArtistItemProps) => {
  const [isShown, setIsShown] = useState(false)

  const image = artist.images[0]?.url || avatar
  const icon =
    showDelete && isShown ? <span>x</span> : related ? <span>+</span> : null
  const isTransparent = related ? true : false

  return (
    <ListItem
      transparent={isTransparent}
      onClick={() => onSelected(artist)}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {!related && <img src={image} alt="artist avatar" />}
      <ItemContent>
        <strong>{artist.name}</strong>
      </ItemContent>
      {icon}
    </ListItem>
  )
}

export default ArtistItem
