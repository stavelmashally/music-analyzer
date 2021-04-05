import {useSelector} from 'react-redux'
import {AppState} from 'redux/store'

export const useAppSelector = () => useSelector((state: AppState) => state.app)

