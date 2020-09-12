const keys = require('../config/keys');
const SpotifyApi = require('../services/SpotifyApi');

const spotifyApi = new SpotifyApi(keys.clientId, keys.clientSecret);

exports.getArtist = async (req, res) => {
  const { name } = req.query;

  const artists = await spotifyApi.getArtist(name);

  return res.json({ artists });
};