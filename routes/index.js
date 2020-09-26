const express = require('express');
const { getArtists } = require('../controllers/spotifyController');

exports.getRoutes = () => {
  const router = express.Router();
  router.get('/artists/', getArtists);

  return router;
};
