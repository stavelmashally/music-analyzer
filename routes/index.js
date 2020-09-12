const spotifyCtrl = require('../controllers/spotifyController');

module.exports = app => {
  app.get('/api/artists/', spotifyCtrl.getArtist);
};
