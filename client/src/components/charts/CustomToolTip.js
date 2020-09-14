import React from 'react';
import { FEATURE_INFO } from './chartsConfig';

const CustomToolTip = ({ active, label, payload }) => {
  const renderContent = () => {
    return payload.map(({ dataKey, value, color }) => {
      return (
        <h5
          key={dataKey}
          style={{ color }}
        >{`${dataKey} : ${value}`}</h5>
      );
    });
  };

  if (active) {
    return (
      <div className="ui segment" style={{ width: '300px' }}>
        {renderContent()}
        <h4>{label}</h4>
        <p className="desc">{FEATURE_INFO[label]}</p>
      </div>
    );
  }
  return null;
};

export default CustomToolTip;
