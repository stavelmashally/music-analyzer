import React from 'react'
import { useSelector } from 'react-redux'
import {appSelector} from 'redux/app'
import ChartPlaceholder from './ChartPlaceholder'
import Loader from 'components/Loader'
const ArtistChart = React.lazy(() => import('./ArtistChart'))

const ChartSection = () => {
  const {selected} = useSelector(appSelector)
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
