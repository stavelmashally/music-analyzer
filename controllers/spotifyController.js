const keys = require('../config/keys');
const SpotifyApi = require('../services/SpotifyApi');

const spotifyApi = new SpotifyApi(keys.clientId, keys.clientSecret);

exports.getArtist = async (req, res) => {
  const name = req.query.name;

  const artists = await spotifyApi.getArtist(name);

  return res.send(artists);
};

exports.getAudioFeatures = async (req, res) => {
  const artistId = req.query.artistId;

  const features = await spotifyApi.getAudioFeatures(artistId);

  return res.send(features);
};
