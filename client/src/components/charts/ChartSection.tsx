import React from 'react'
import {useAppSelector} from 'redux/hooks'
import {appSelector} from 'redux/app'
import ChartPlaceholder from './ChartPlaceholder'
import {ChartSectionContainer, Loader} from 'styles'

const ArtistsChart = React.lazy(() => import('./ArtistsChart'))

const ChartSection = () => {
  const {selected, chartStatus} = useAppSelector(appSelector)

  const isLoading = chartStatus === 'loading'

  const content = isLoading ? (
    <Loader big />
  ) : selected.length > 0 ? (
    <React.Suspense fallback={<Loader big />}>
      <ArtistsChart artists={selected} />
    </React.Suspense>
  ) : (
    <ChartPlaceholder />
  )

  return <ChartSectionContainer>{content}</ChartSectionContainer>
}

export default ChartSection
