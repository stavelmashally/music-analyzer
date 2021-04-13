import qs from 'qs'
import {httpClient, httpAuthClient} from '../config/httpClient'
import {Artist, BaseArtist, AudioFeatures} from '../common/artist'
import {Suggestion} from '../common/suggestion'

interface AuthHeaders {
  headers: {
    Authorization: string
  }
}

interface TrackResponse {
  id: string
}

export const searchArtists = async (name: string): Promise<Suggestion[]> => {
  const authHeaders = await generateAuthHeaders()

  const {
    artists: {items},
  } = await httpClient.get(`/search?q=${name}&type=artist&limit=5`, authHeaders)

  const suggestions: Suggestion[] = items.map(
    ({id, name, images}: Suggestion) => ({
      id,
      name,
      images,
    }),
  )

  return suggestions
}

const generateAuthHeaders = async (): Promise<AuthHeaders> => {
  const {access_token} = await httpAuthClient.post(
    '/token',
    qs.stringify({
      grant_type: 'client_credentials',
    }),
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: process.env.CLIENT_ID!,
        password: process.env.CLIENT_SECRET!,
      },
    },
  )

  return {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }
}

export const getDataForArtist = async (artistId: string): Promise<Artist> => {
  const authHeaders = await generateAuthHeaders()

  const {id, name, images}: BaseArtist = await httpClient.get(
    `/artists/${artistId}`,
    authHeaders,
  )

  const audioFeatures = await getAudioFeatures(artistId, authHeaders)
  const relatedArtists = await getRelatedArtists(artistId, authHeaders)

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
  authHeaders: AuthHeaders,
): Promise<Artist[]> => {
  const {artists} = await httpClient.get(
    `/artists/${artistId}/related-artists`,
    authHeaders,
  )

  const relatedArtists: Artist[] = artists
    .slice(0, 3)
    .map(({id, name, images}: BaseArtist) => ({id, name, images}))

  return relatedArtists
}

export const getAudioFeatures = async (
  artistId: string,
  authHeaders: AuthHeaders,
): Promise<AudioFeatures[]> => {
  const {tracks} = await httpClient.get(
    `/artists/${artistId}/top-tracks?country=US`,
    authHeaders,
  )

  // Spotify accepts comma seperated list of ids
  const formattedIds: string[] = tracks
    .map((track: TrackResponse) => track.id)
    .join(',')

  const {audio_features} = await httpClient.get(
    `/audio-features/?ids=${formattedIds}`,
    authHeaders,
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
