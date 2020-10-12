import React from 'react'
import {useArtist} from '../../contexts/ArtistContext'
import ChartPlaceholder from './ChartPlaceholder'
import Loader from '../Loader'

const ArtistChart = React.lazy(() => import('./ArtistChart'))

const ChartSection = () => {
  const {selections} = useArtist()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      {selections.length === 0 ? (
        <ChartPlaceholder />
      ) : (
        <React.Suspense fallback={<Loader />}>
          <ArtistChart data={selections} />
        </React.Suspense>
      )}
    </div>
  )
}

export default ChartSection
