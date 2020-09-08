const spotifyCtrl = require('../controllers/spotifyController');

module.exports = app => {
  app.get('/api/artist/', spotifyCtrl.getArtist);
  app.get('/api/features/', spotifyCtrl.getAudioFeatures)
};
