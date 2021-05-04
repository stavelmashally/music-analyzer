import React, {useEffect, useState} from 'react'
import {useAppSelector, useAppDispatch} from 'store/hooks'
import {fetchSuggestions, appSelector, fetchArtistData} from 'store/app'
import useDebounce from 'hooks/useDebounce'
import * as Styled from './styles'
import ListItem from 'components/ListItem'
import {Loader} from 'styles'
import avatar from 'images/avatar-placeholder.png'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const {suggestions, searchStatus, error} = useAppSelector(appSelector)
  const dispatch = useAppDispatch()
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const handleSuggestionSelected = (id: string) => {
    setSearchTerm('')
    dispatch(fetchArtistData(id))
  }

  const suggestionsListItems = suggestions.map(suggestion => (
    <ListItem
      key={suggestion.id}
      itemId={suggestion.id}
      image={suggestion.images[0]?.url || avatar}
      content={suggestion.name}
      onItemSelected={handleSuggestionSelected}
    />
  ))

  const isLoading = searchStatus === 'loading' && searchTerm !== ''
  const showBox = isLoading || suggestionsListItems.length > 0
  const boxContent = isLoading ? <Loader /> : suggestionsListItems

  const handleChange = ({
    target: {value},
  }: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(value)

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchSuggestions(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm, dispatch])

  return (
    <Styled.Wrapper>
      <Styled.Input
        placeholder="Enter artist name"
        value={searchTerm}
        onChange={handleChange}
      />
      {showBox ? (
        <Styled.SuggestionsList>{boxContent}</Styled.SuggestionsList>
      ) : null}
      {error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Wrapper>
  )
}

export default SearchBar
