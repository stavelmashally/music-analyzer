import React from 'react'
import {useAppSelector} from 'store/hooks'
import {appSelector} from 'store/app'
import ChartPlaceholder from './Placeholder'
import * as Styled from './styles'
import {Loader} from 'styles'

const ArtistsChart = React.lazy(() => import('./Chart'))

const ChartSection = () => {
  const {selected, chartStatus} = useAppSelector(appSelector)

  const isLoading = chartStatus === 'loading'

  const content = isLoading ? (
    <Loader $big />
  ) : selected.length > 0 ? (
    <React.Suspense fallback={<Loader $big />}>
      <ArtistsChart artists={selected} />
    </React.Suspense>
  ) : (
    <ChartPlaceholder />
  )

  return <Styled.Wrapper>{content}</Styled.Wrapper>
}

export default ChartSection
