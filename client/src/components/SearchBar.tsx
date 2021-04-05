import React, {useEffect} from 'react'
import {useAppSelector} from 'hooks/useAppSelector'
import {useAppDispatch} from 'hooks/useAppDispatch'
import {fetchArtists, updateSearchTerm} from 'redux/app'
import useDebounce from 'hooks/useDebounce'

const SearchBar = () => {
  const {searchTerm} = useAppSelector()
  const dispatch = useAppDispatch()
  const debouncedSearchTerm = useDebounce(searchTerm, 800)

  const updateTerm = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateSearchTerm(value))

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchArtists(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm, dispatch])

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

export default SearchBar
