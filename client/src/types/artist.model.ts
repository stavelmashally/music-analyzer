import {AudioFeatures} from './audioFeatures.model'

interface ArtistImage {
  width: number
  height: number
  url: string
}

export interface Artist {
  id: string
  name: string
  image: ArtistImage
  audioFeatures: AudioFeatures
}
