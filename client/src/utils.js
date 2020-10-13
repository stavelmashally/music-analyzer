import {FEATURES} from './components/charts/chartsConfig'

export const formatData = artists => {
  console.log('formatData')
  const data = []

  FEATURES.forEach(featureName => {
    const feature = {name: featureName}
    artists.forEach(
      artist => (feature[artist.name] = artist.audioFeatures[featureName]),
    )
    data.push(feature)
  })

  return data
}

export const generateColor = () => {
  return '#' + Math.random().toString(16).substr(-6)
}
