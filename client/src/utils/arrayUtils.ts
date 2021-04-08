import {Artist, AudioFeatures} from 'types/artist.model'

export const FEATURES: string[] = [
  'danceability',
  'energy',
  'speechiness',
  'acousticness',
  'liveness',
  'valence',
]

interface Feature {
  [key: string]: number | string
}

export const formatData = (artists: Artist[]) => {
  const data: Feature[] = []

  FEATURES.forEach(featureName => {
    const feature: Feature = {name: featureName}
    artists.forEach(
      artist =>
        (feature[artist.name] =
          artist.audioFeatures[featureName as keyof AudioFeatures]),
    )
    data.push(feature)
  })

  return data
}
