import React from 'react'

const CustomizedAxisTick: React.JSXElementConstructor<any> = ({
  x,
  y,
  payload: {value},
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        style={{color: 'white'}}
        x={0}
        y={0}
        dy={10}
        textAnchor="end"
        fontSize="12px"
        transform="rotate(-20)"
      >
        {value}
      </text>
    </g>
  )
}

export default CustomizedAxisTick
