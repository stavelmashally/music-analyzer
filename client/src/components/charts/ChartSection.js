import React from 'react'
import {useSelector} from 'react-redux'
import ChartPlaceholder from './ChartPlaceholder'
import Loader from '../Loader'

const ArtistChart = React.lazy(() => import('./ArtistChart'))

const ChartSection = () => {
  const {selected} = useSelector(state => state.artists)

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

export default ChartSection
