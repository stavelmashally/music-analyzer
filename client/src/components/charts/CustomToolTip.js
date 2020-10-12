import React from 'react'
import {withTheme} from 'styled-components'
import {FEATURE_INFO} from './chartsConfig'

const CustomToolTip = ({active, label, payload, theme}) => {
  const renderContent = () =>
    payload.map(({dataKey, value, color}) => (
      <h5 key={dataKey} style={{color}}>{`${dataKey} : ${value}`}</h5>
    ))

  if (active) {
    return (
      <div
        className="ui segment"
        style={{width: '300px', backgroundColor: theme.body}}
      >
        {renderContent()}
        <h4>{label}</h4>
        <p className="desc">{FEATURE_INFO[label]}</p>
      </div>
    )
  }
  return null
}

export default withTheme(CustomToolTip)
