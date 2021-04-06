import React from 'react'
import { useAppSelector } from 'redux/hooks'
import {appSelector} from 'redux/app'
import ChartPlaceholder from './ChartPlaceholder'
import Loader from 'components/Loader'
const ArtistChart = React.lazy(() => import('./ArtistChart'))

const ChartSection = () => {
  const { selected } = useAppSelector(appSelector)
  
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
