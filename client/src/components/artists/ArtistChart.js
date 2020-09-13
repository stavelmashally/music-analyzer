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

import './chart.css';

const formatArtistData = artists => {
  const features = [
    'danceability',
    'energy',
    'speechiness',
    'acousticness',
    'liveness',
    'valence',
  ];

  const data = [];

  features.forEach(feature => {
    data.push({
      name: feature,
      [artists[0].name]: artists[0].audioFeatures[feature],
      [artists[1].name]: artists[1].audioFeatures[feature],
    });
  });

  return data;
};

const ArtistChart = () => {
  const [selections, setSelections] = useContext(SelectionsContext);

  const renderBars = () => {
    const colors = ['#82ca9d', '#f06400', '#4bbcfe'];
    return selections.map(artist => (
      <Bar dataKey={artist.name} fill={colors.pop()} />
    ));
  };

  if (selections.length > 1) {
    const data = formatArtistData(selections);
    return (
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart width={100} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {renderBars()}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return <div>Search for an artists to compare</div>;
};

export default ArtistChart;
