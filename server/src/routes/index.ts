import {Router} from 'express'
import * as SpotifyService from '../services/SpotifyService'

export const router = Router()

router.get('/suggestions/', async (req, res) => {
  const name = req.query.name as string

  try {
    const suggestions = await SpotifyService.searchArtists(name)
    return res.json({suggestions})
  } catch (error) {
    return res
      .status(400)
      .json({error: 'Please provide a valid english artist name'})
  }
})

router.get('/artist-data/', async (req, res) => {
  const id = req.query.id as string

  try {
    const artistData = await SpotifyService.getDataForArtist(id)
    return res.json({artistData})
  } catch (error) {
    return res.status(400).json({error: 'Failed to get the artist data'})
  }
})
