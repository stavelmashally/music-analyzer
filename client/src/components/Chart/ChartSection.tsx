import React from 'react'
import {useAppSelector} from 'redux/hooks'
import {appSelector} from 'redux/app'
import ChartPlaceholder from './ChartPlaceholder'
import {Wrapper} from './styles'
import {Loader} from 'components/shared'

const ArtistsChart = React.lazy(() => import('./Chart'))

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

  return <Wrapper>{content}</Wrapper>
}

export default ChartSection
