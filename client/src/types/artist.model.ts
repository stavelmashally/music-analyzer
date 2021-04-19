export interface Feature {
  [key: string]: number | string
}
export interface AudioFeatures {
  danceability: number
  energy: number
  key: number
  loudness: number
  mode: number
  speechiness: number
  acousticness: number
  instrumentalness: number
  liveness: number
  valence: number
  tempo: number
}

interface ArtistImage {
  width: number
  height: number
  url: string | undefined
}

export interface Artist {
  id: string
  name: string
  images: ArtistImage[]
  audioFeatures: AudioFeatures
  relatedArtists: Artist[]
  color?: string
}

export interface Suggestion {
  id: string
  name: string
  images: ArtistImage[]
}
