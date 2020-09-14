const axios = require('axios');
const qs = require('qs');

module.exports = class SpotifyApi {
  constructor(clientId, clientSecret) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  async generateAuthHeaders() {
    const res = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify({
        grant_type: 'client_credentials',
      }),
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: this.clientId,
          password: this.clientSecret,
        },
      }
    );

    const accessToken = res.data.access_token;

    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }

  async getArtist(artistName) {
    const authHeaders = await this.generateAuthHeaders();

    const res = await axios.get(
      `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=5`,
      authHeaders
    );

    const artists = await Promise.all(
      res.data.artists.items.map(async ({ id, name, images }) => {
        const features = await this.getAudioFeatures(id, authHeaders);
        return {
          id,
          name,
          image: images[0],
          audioFeatures: this.procces(features),
        };
      })
    );

    return artists;
  }

  async getAudioFeatures(artistId, authHeaders) {
    const tracks = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`,
      authHeaders
    );

    const trackIds = tracks.data.tracks.map(track => track.id).join(',');

    const res = await axios.get(
      `https://api.spotify.com/v1/audio-features/?ids=${trackIds}`,
      authHeaders
    );

    const audioFeatures = res.data.audio_features;

    return audioFeatures;
  }

  procces(features) {
    const featuresResult = {
      danceability: 0,
      energy: 0,
      key: 0,
      loudness: 0,
      mode: 0,
      speechiness: 0,
      acousticness: 0,
      instrumentalness: 0,
      liveness: 0,
      valence: 0,
      tempo: 0,
    };

    // Sum all the values
    features.forEach(feature => {
      if (feature) {
        Object.keys(feature).forEach(key => {
          if (featuresResult.hasOwnProperty(key)) {
            featuresResult[key] += feature[key];
          }
        });
      }
    });

    // Average
    Object.keys(featuresResult).forEach(key => {
      featuresResult[key] = Number((featuresResult[key] / features.length).toFixed(3));
    });

    return featuresResult;
  }
};
