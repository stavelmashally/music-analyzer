import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts'
import CustomizedAxisTick from './CustomizedAxisTick'
import CustomToolTip from './CustomToolTip'
import {formatData, generateColor} from './chartsConfig'

const ArtistChart = ({data}) => {
  const renderBars = () =>
    data.map(({id, name}) => (
      <Bar key={id} dataKey={name} fill={generateColor()} />
    ))

  const formattedData = formatData(data)

  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart width="100%" height={400} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} tick={<CustomizedAxisTick />} />
        <YAxis width={30} />
        <Tooltip content={<CustomToolTip />} />
        <Legend wrapperStyle={{paddingTop: '30px'}} />
        {renderBars()}
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ArtistChart
