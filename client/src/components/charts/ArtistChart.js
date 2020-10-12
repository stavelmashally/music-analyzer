import React from 'react'
import {useArtist} from '../../contexts/ArtistContext'
import {formatData, generateColor} from './chartsConfig'
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
import './chart.css'

const ArtistChart = () => {
  const {selections} = useArtist()

  const renderBars = () =>
    selections.map(({id, name}) => (
      <Bar key={id} dataKey={name} fill={generateColor()} />
    ))

  if (selections.length) {
    const data = formatData(selections)
    return (
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={450}>
          <BarChart width="100%" height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} tick={<CustomizedAxisTick />} />
            <YAxis width={30} />
            <Tooltip content={<CustomToolTip />} />
            <Legend wrapperStyle={{paddingTop: '30px'}} />
            {renderBars()}
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div>
      <h3 style={{marginTop: '10px'}}>
        Search for artists to make a comparison
      </h3>
    </div>
  )
}

export default ArtistChart
