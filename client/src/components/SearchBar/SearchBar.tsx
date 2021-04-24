import React, {useEffect, useState} from 'react'
import {useAppSelector, useAppDispatch} from 'redux/hooks'
import {fetchSuggestions, appSelector, fetchArtistData} from 'redux/app'
import useDebounce from 'hooks/useDebounce'
import {Input, SearchBoxWrapper, Wrapper, Error} from './styles'
import {Loader, ListItem} from 'components/shared'
import avatar from 'images/avatar-placeholder.png'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const {data, searchStatus, error} = useAppSelector(appSelector)
  const dispatch = useAppDispatch()
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const handleSuggestionSelected = (id: string) => {
    setSearchTerm('')
    dispatch(fetchArtistData(id))
  }

  const suggestionsListItems = data.map(suggestion => (
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
    <Wrapper>
      <Input
        placeholder="Enter artist name"
        value={searchTerm}
        onChange={handleChange}
      />
      {showBox ? <SearchBoxWrapper>{boxContent}</SearchBoxWrapper> : null}
      {error && <Error>{error}</Error>}
    </Wrapper>
  )
}

export default SearchBar
