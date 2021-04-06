import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchArtists, updateSearchTerm, appSelector} from 'redux/app'
import useDebounce from 'hooks/useDebounce'

const SearchBar = () => {
  const {searchTerm} = useSelector(appSelector)
  const dispatch = useDispatch()
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

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
