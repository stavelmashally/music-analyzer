import {Artist, AudioFeatures, Feature} from 'types/artist.model'
import {FEATURES} from 'components/charts/chartsConfig'
import _ from 'lodash'


export const getNewRelatedArtists = (selectedArtists: Artist[]) => {
  const relatedArtists = _.flatten(
    selectedArtists.map(selected => selected.relatedArtists),
    )
    return _.chain(relatedArtists)
    .uniqBy('id')
    .pullAllBy(selectedArtists, 'id')
    .sampleSize(3)
    .value()
  }

  export const pushUnique = <T extends {id: string}>(item: T, items: T[]) => {
    const exists = !!items.find(({id}) => id === item.id)
    if (!exists) {
      items.push(item)
    }
    return items
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
