import React from 'react';

const CustomizedAxisTick = props => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={10}
        textAnchor="end"
        fontSize="12px"
        fill="#666"
        transform="rotate(-20)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default CustomizedAxisTick;
