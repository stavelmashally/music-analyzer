import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import { RootState, AppDispatch } from './store'

// create typed versions 
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector