const keys = require('../config/keys');
const SpotifyApi = require('../services/SpotifyApi');

const spotifyApi = new SpotifyApi(keys.clientId, keys.clientSecret);

exports.getTracks = async (req, res) => {
  const name = req.query.name;

  const tracks =  await spotifyApi.getTrackList(name)

  return res.send(tracks);
};

exports.getAudioFeatures = async (req, res) => {
  const ids = req.query.ids;

  const features = await spotifyApi.getAudioFeatures()

  return res.send(ids);
};
