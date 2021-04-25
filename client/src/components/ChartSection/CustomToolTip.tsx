import {TooltipPayload, TooltipProps} from 'recharts'
import {FEATURE_INFO, FeatureInfo} from './chartUtil'
import * as Styled from './styles'

const CustomToolTip = ({active, label, payload}: TooltipProps) => {
  const titles = payload?.map(({dataKey, value, color}: TooltipPayload) => (
    <strong key={color} style={{color}}>{`${dataKey} : ${value}`}</strong>
  ))

  const featureInfo = FEATURE_INFO[label as keyof FeatureInfo]

  if (active) {
    return (
      <Styled.ToolTipWrapper>
        {titles}
        <p className="desc">{featureInfo}</p>
      </Styled.ToolTipWrapper>
    )
  }
  return null
}

export default CustomToolTip
