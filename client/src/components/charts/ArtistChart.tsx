import {useMemo} from 'react'
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
import { formatData } from 'utils/arrayUtils'
import {appSelector} from 'redux/app'
import {useSelector} from 'react-redux'

const ArtistChart = () => {
  const {selected} = useSelector(appSelector)

  const chartBars = selected.map(({id, name, color}) => (
    <Bar key={id} dataKey={name} fill={color} />
  ))
  const formattedData = useMemo(() => formatData(selected), [selected])

  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart width={100} height={400} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} tick={<CustomizedAxisTick />} />
        <YAxis width={30} />
        <Tooltip content={<CustomToolTip />} />
        <Legend wrapperStyle={{paddingTop: '30px'}} />
        {chartBars}
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ArtistChart
