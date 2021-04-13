export interface ArtistImage {
  height: number
  width: number
  url: string
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

export interface BaseArtist {
  id: string
  name: string
  images: ArtistImage[]
}

export interface Artist extends BaseArtist {
  audioFeatures: AudioFeatures
  relatedArtists: Artist[]
}
