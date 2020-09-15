const keys = require('../config/keys');
const SpotifyApi = require('../services/SpotifyApi');

const spotifyApi = new SpotifyApi(keys.clientId, keys.clientSecret);

exports.getArtist = async (req, res) => {
  const { name } = req.query;

  try {
    const artists = await spotifyApi.getArtist(name);
    return res.json({ artists });
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Please provide a valid english artist name' });
  }
};
