import {useSelector, useDispatch} from 'react-redux'
import {AppState, AppDispatch} from 'redux/store'

export const useAppSelector = () => useSelector((state: AppState) => state.app)
export const useArtistsSelector = () =>
  useSelector((state: AppState) => state.artists)
export const useAppDispatch = () => useDispatch<AppDispatch>()
