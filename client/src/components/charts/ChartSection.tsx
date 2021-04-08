import React from 'react'
import { useAppSelector } from 'redux/hooks'
import {appSelector} from 'redux/app'
import ChartPlaceholder from './ChartPlaceholder'
import { ChartSectionContainer, Loader } from 'styles'

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
    <ChartSectionContainer
    >
      {content}
    </ChartSectionContainer>
  )
}

export default ChartSection
