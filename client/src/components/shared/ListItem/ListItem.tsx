import React from 'react'
import {ItemContent, ListItemWrapper} from './styles'

interface ListItemProps {
  itemId: string
  content: string
  image?: string
  transparent?: boolean
  onItemSelected: (id: string) => void
}

const ListItem = ({
  onItemSelected,
  image,
  content,
  itemId,
  transparent,
}: ListItemProps) => {

  return (
    <ListItemWrapper
      transparent={transparent}
      onClick={() => onItemSelected(itemId)}
    >
      {image && <img src={image} alt="avatar" />}
      <ItemContent>
        <strong>{content}</strong>
      </ItemContent>
    </ListItemWrapper>
  )
}

export default ListItem
