import {useState} from 'react'
import {Artist} from 'types/artist.model'
import {ListItem, ItemContent, DeleteIcon} from 'styles'
import avatar from 'images/avatar-placeholder.png'

interface ArtistItemProps {
  artist: Artist
  showDelete?: boolean
  onSelected: (artist: Artist) => void
}

const ArtistItem = ({artist, onSelected, showDelete}: ArtistItemProps) => {
  const [isShown, setIsShown] = useState(false)

  const image = artist.image?.url || avatar
  const deleteIcon = showDelete && isShown ? <span>x</span> : null

  return (
    <ListItem
      onClick={() => onSelected(artist)}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img src={image} alt="artist avatar" />
      <ItemContent>
        <strong>{artist.name}</strong>
      </ItemContent>
      {deleteIcon}
    </ListItem>
  )
}

export default ArtistItem
