import React, {useEffect} from 'react'
import {useAppSelector, useAppDispatch} from 'redux/hooks'
import {fetchArtists, updateSearchTerm, appSelector} from 'redux/app'
import useDebounce from 'hooks/useDebounce'
import ArtistItem from 'components/artists/ArtistItem'
import {Input, SearchBox, ListItem} from 'styles'

const SearchBar = () => {
  const {searchTerm, data} = useAppSelector(appSelector)
  const dispatch = useAppDispatch()
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const artistListItems = data.map(artist => (
    <ArtistItem
      key={artist.id}
      artist={artist}
      onSelected={() => console.log('selected')}
    />
  ))

  const handleChange = ({
    target: {value},
  }: React.ChangeEvent<HTMLInputElement>) => dispatch(updateSearchTerm(value))

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchArtists(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm, dispatch])

  return (
    <div>
      <Input
        placeholder="Enter artist name"
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchBox>{artistListItems}</SearchBox>
    </div>
  )
}

export default SearchBar
