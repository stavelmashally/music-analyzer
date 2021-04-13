import {Suggestion} from 'types/artist.model'
import {SuggetionListItem, ItemContent} from 'styles'
import avatar from 'images/avatar-placeholder.png'

interface SuggestionItemProps {
  suggestion: Suggestion
  showDelete?: boolean
  related?: boolean
  onSelected: (id: string) => void
}

const SuggestionItem = ({suggestion, onSelected}: SuggestionItemProps) => {
  const image = suggestion.images[0]?.url || avatar

  return (
    <SuggetionListItem onClick={() => onSelected(suggestion.id)}>
      <img src={image} alt="artist avatar" />
      <ItemContent>
        <strong>{suggestion.name}</strong>
      </ItemContent>
    </SuggetionListItem>
  )
}
export default SuggestionItem
