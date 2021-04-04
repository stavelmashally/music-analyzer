import React from 'react'
import {useAppSelector} from 'redux/hooks'
import ChartPlaceholder from './ChartPlaceholder'
import Loader from 'components/Loader'

const ArtistChart = React.lazy(() => import('./ArtistChart'))

const ChartSection = () => {
  const {selected} = useAppSelector(state => state.artists)
  console.log('chart section')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      {selected.length === 0 ? (
        <ChartPlaceholder />
      ) : (
        <React.Suspense fallback={<Loader />}>
          <ArtistChart data={selected} />
        </React.Suspense>
      )}
    </div>
  )
}

export default React.memo(ChartSection)
