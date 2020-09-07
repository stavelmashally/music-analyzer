const spotifyCtrl = require('../controllers/spotifyController');

module.exports = app => {
  app.get('/api/tracks/', spotifyCtrl.getTracks);
  app.get('/api/features/', spotifyCtrl.getAudioFeatures)
};
