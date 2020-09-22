import { FEATURES } from './chartsConfig';

export const formatData = artists => {
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

export const generateColor = () => {
  return '#' + Math.random().toString(16).substr(-6);
};
