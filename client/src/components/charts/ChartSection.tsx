import React from 'react'
import {useArtistsSelector} from 'hooks/reduxHooks'
import ChartPlaceholder from './ChartPlaceholder'
import Loader from 'components/Loader'
const ArtistChart = React.lazy(() => import('./ArtistChart'))

const ChartSection = () => {
  const {selected} = useArtistsSelector()
  const content =
    selected.length > 0 ? (
      <React.Suspense fallback={<Loader />}>
        <ArtistChart />
      </React.Suspense>
    ) : (
      <ChartPlaceholder />
    )

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      {content}
    </div>
  )
}

export default ChartSection
