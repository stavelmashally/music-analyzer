import React, { useContext } from 'react';
import { SelectionsContext } from '../../contexts/SelectionsContext';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import CustomToolTip from './CustomToolTip';
import { FEATURES, generateColor } from './chartsConfig';
import './chart.css';

const formatArtistData = artists => {
  const data = [];

  FEATURES.forEach(featureName => {
    const feature = { name: featureName };
    artists.forEach(
      artist => (feature[artist.name] = artist.audioFeatures[featureName])
    );
    data.push(feature);
  });

  return data;
};

const ArtistChart = () => {
  const selections = useContext(SelectionsContext);

  const renderBars = () => {
    return selections.map(artist => (
      <Bar key={artist.id} dataKey={artist.name} fill={generateColor()} />
    ));
  };

  if (selections.length) {
    const data = formatArtistData(selections);
    return (
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart width={100} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomToolTip/>}/>
            <Legend />
            {renderBars()}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div>
      <h3>Search for artists to make a comparison</h3>
    </div>
  );
};

export default ArtistChart;
