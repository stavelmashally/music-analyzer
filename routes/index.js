const express = require('express');

const spotifyCtrl = require('../controllers/spotifyController');

exports.getRoutes = () => {
  const router = express.Router();
  router.get('/artists/', spotifyCtrl.getArtist);

  return router;
};
