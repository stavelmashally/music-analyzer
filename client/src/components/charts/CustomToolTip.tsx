import {TooltipPayload, TooltipProps} from 'recharts'
import {withTheme, DefaultTheme} from 'styled-components'
import {FEATURE_INFO, FeatureInfo} from './chartsConfig'

interface CustomToolTipProps extends TooltipProps {
  theme: DefaultTheme
}

const CustomToolTip = ({active, label, payload, theme}: CustomToolTipProps) => {
  const renderContent = () =>
    payload?.map(({dataKey, value, color}: TooltipPayload) => (
      <h5 key={color} style={{color}}>{`${dataKey} : ${value}`}</h5>
    ))

  if (active) {
    return (
      <div
        className="ui segment"
        style={{width: '300px', backgroundColor: theme.body}}
      >
        {renderContent()}
        <h4>{label}</h4>
        <p className="desc">{FEATURE_INFO[label as keyof FeatureInfo]}</p>
      </div>
    )
  }
  return null
}

export default withTheme(CustomToolTip)
