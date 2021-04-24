import {TooltipPayload, TooltipProps} from 'recharts'
import {FEATURE_INFO, FeatureInfo} from './chartUtil'
import {ToolTipWrapper} from './styles'

const CustomToolTip = ({active, label, payload}: TooltipProps) => {
  const titles = payload?.map(({dataKey, value, color}: TooltipPayload) => (
    <strong key={color} style={{color}}>{`${dataKey} : ${value}`}</strong>
  ))
  
  const featureInfo = FEATURE_INFO[label as keyof FeatureInfo]

  if (active) {
    return (
      <ToolTipWrapper>
        {titles}
        <p className="desc">{featureInfo}</p>
      </ToolTipWrapper>
    )
  }
  return null
}

export default CustomToolTip
