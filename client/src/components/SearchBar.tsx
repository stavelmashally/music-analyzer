import React, {useEffect, useState} from 'react'
import {useAppSelector, useAppDispatch} from 'redux/hooks'
import {fetchArtists, appSelector, addArtist} from 'redux/app'
import useDebounce from 'hooks/useDebounce'
import ArtistItem from 'components/ArtistItem'
import {Input, SearchBox, SearchBarContainer, Error, Loader} from 'styles'
import {Artist} from 'types/artist.model'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const {data, status, error} = useAppSelector(appSelector)
  const dispatch = useAppDispatch()
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const handleArtistSelected = (artist: Artist) => {
    setSearchTerm('')
    dispatch(addArtist(artist))
  }

  const artistListItems = data.map(artist => (
    <ArtistItem
      key={artist.id}
      artist={artist}
      onSelected={handleArtistSelected}
    />
  ))
  const isLoading = status === 'loading'
  const showBox = isLoading || artistListItems.length > 0
  const boxContent = isLoading ? <Loader /> : artistListItems

  const handleChange = ({
    target: {value},
  }: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(value)

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchArtists(debouncedSearchTerm))
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
