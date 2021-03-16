import React, {useState, memo} from 'react'
import {useDispatch} from 'react-redux'
import {fetchArtists} from '../redux/artists'

const SearchBar = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  const updateTerm = e => setTerm(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    const artistName = term.trim()
    if (!artistName) {
      return
    }
    dispatch(fetchArtists(artistName))
    setTerm('')
  }

  return (
    <div>
      <form
        className="ui big fluid input"
        style={{marginTop: '30px'}}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Artist name"
          value={term}
          onChange={updateTerm}
        />
        <button className="ui violet big button" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default memo(SearchBar)
