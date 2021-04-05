import { useSelector } from 'react-redux'
import { AppState } from 'redux/store'

export const useArtistSelector = () => useSelector((state: AppState) => state.artist)