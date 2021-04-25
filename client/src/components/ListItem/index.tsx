import React from 'react'
import * as Styled from './styles'

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
    <Styled.Wrapper
      $transparent={transparent}
      onClick={() => onItemSelected(itemId)}
    >
      {image && <Styled.Image src={image} alt="avatar" />}
      <Styled.ItemContent>
        <strong>{content}</strong>
      </Styled.ItemContent>
    </Styled.Wrapper>
  )
}

export default ListItem
