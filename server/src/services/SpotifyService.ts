import {HttpClient} from '../common/HttpClient'
import {Artist, BaseArtist, AudioFeatures} from '../common/artist'
import {Suggestion} from '../common/suggestion'

export const searchArtists = async (name: string): Promise<Suggestion[]> => {
  const res = await HttpClient.get(`/search?q=${name}&type=artist&limit=5`)
  const {
    artists: {items},
  } = res
  const suggestions: Suggestion[] = items.map(
    ({id, name, images}: Suggestion) => ({
      id,
      name,
      images,
    }),
  )

  return suggestions
}

export const getDataForArtist = async (artistId: string): Promise<Artist> => {
  const {id, name, images}: BaseArtist = await HttpClient.get(
    `/artists/${artistId}`,
  )

  const audioFeatures = await getAudioFeatures(artistId)
  const relatedArtists = await getRelatedArtists(artistId)

  return {
    id,
    name,
    images,
    audioFeatures: proccesArtistData(audioFeatures),
    relatedArtists,
  }
}

export const getRelatedArtists = async (
  artistId: string,
): Promise<Artist[]> => {
  const {artists} = await HttpClient.get(`/artists/${artistId}/related-artists`)

  const relatedArtists: Artist[] = artists
    .slice(0, 3)
    .map(({id, name, images}: BaseArtist) => ({id, name, images}))

  return relatedArtists
}

export const getAudioFeatures = async (
  artistId: string,
): Promise<AudioFeatures[]> => {
  const {tracks} = await HttpClient.get(
    `/artists/${artistId}/top-tracks?country=US`,
  )

  // Spotify accepts comma seperated list of ids
  const formattedIds: string[] = tracks
    .map((track: {id: number}) => track.id)
    .join(',')

  const {audio_features} = await HttpClient.get(
    `/audio-features/?ids=${formattedIds}`,
  )

  return audio_features
}

const proccesArtistData = (features: AudioFeatures[]): AudioFeatures => {
  const featuresResult: AudioFeatures = {
    danceability: 0,
    energy: 0,
    key: 0,
    loudness: 0,
    mode: 0,
    speechiness: 0,
    acousticness: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0,
    tempo: 0,
  }

  // Sum all the values
  features.forEach(feature => {
    if (feature) {
      Object.keys(feature).forEach(key => {
        if (featuresResult.hasOwnProperty(key)) {
          const featureKey = key as keyof AudioFeatures
          featuresResult[featureKey] += feature[featureKey]
        }
      })
    }
  })

  // Average
  Object.keys(featuresResult).forEach(key => {
    const featureKey = key as keyof AudioFeatures
    const avg = (featuresResult[featureKey] / features.length).toFixed(3)
    featuresResult[featureKey] = +avg
  })

  return featuresResult
}
