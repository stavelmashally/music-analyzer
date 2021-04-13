import React, {useEffect, useState} from 'react'
import {useAppSelector, useAppDispatch} from 'redux/hooks'
import {fetchSuggestions, appSelector, fetchArtistData} from 'redux/app'
import useDebounce from 'hooks/useDebounce'
import SuggestionItem from 'components/SuggestionItem'
import {Input, SearchBox, SearchBarContainer, Error, Loader} from 'styles'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const {data, status, error} = useAppSelector(appSelector)
  const dispatch = useAppDispatch()
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const handleSuggestionSelected = (id: string) => {
    setSearchTerm('')
    dispatch(fetchArtistData(id))
  }

  const suggestionsListItems = data.map(suggestion => (
    <SuggestionItem
      key={suggestion.id}
      suggestion={suggestion}
      onSelected={handleSuggestionSelected}
    />
  ))
  const isLoading = status === 'loading'
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
    <SearchBarContainer>
      <Input
        placeholder="Enter artist name"
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchBox show={showBox}>{boxContent}</SearchBox>
      {error && <Error>{error}</Error>}
    </SearchBarContainer>
  )
}

export default SearchBar
