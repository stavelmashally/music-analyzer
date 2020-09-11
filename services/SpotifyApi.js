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
      `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
      authHeaders
    );

    const artists = res.data.artists.items.map(({ id, name, images }) => ({
      id,
      name,
      image: images[0],
    }));

    return artists;
  }

  async getAudioFeatures(artistId) {
    const authHeaders = await this.generateAuthHeaders();

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
};

// (async function () {
//   const spotify = new SpotifyApi(
//     '69b69caae3334c56b651a2f714b35f3c',
//     '728cfe36ae884f18a8da60d95052a130'
//   );
//   const artists = await spotify.getArtist('tuna');
//   const artistTracks = await spotify.getArtistTracks(artists[0].id);
//   const features = await spotify.getAudioFeatures(artistTracks.join(','));
//   console.log(features);
// })();
