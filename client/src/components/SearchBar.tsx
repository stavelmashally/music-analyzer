import React, {memo, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from 'redux/hooks'
import {fetchArtists, updateSearchTerm} from 'redux/artists'
import useDebounce from 'hooks/useDebounce'

const SearchBar = () => {
  const {searchTerm} = useAppSelector(state => state.artists)
  const debouncedSearchTerm = useDebounce(searchTerm, 800)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchArtists(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm, dispatch])

  const updateTerm = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateSearchTerm(value))

  return (
    <form className="ui big fluid input" style={{marginTop: '30px'}}>
      <input
        type="text"
        placeholder="Enter artist name"
        value={searchTerm}
        onChange={updateTerm}
      />
    </form>
  )
}

export default memo(SearchBar)
