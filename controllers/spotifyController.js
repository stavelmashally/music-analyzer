const {getArtistsFeatures} = require('../services/SpotifyApi')

exports.getArtists = async (req, res) => {
  const {name} = req.query

  try {
    const artists = await getArtistsFeatures(name)
    return res.json({artists})
  } catch (error) {
    return res
      .status(400)
      .json({error: 'Please provide a valid english artist name'})
  }
}
