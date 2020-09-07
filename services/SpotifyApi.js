const axios = require('axios');
const qs = require('qs');

module.exports = class SpotifyApi {
  constructor(clientId, clientSecret) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  async getAccessToken() {
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

    return res.data.access_token;
  }

  async getTrackList(trackName) {
    const accessToken = await this.getAccessToken();

    const res = await axios.get(
      `https://api.spotify.com/v1/search?q=${trackName}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const tracks = res.data.tracks.items.map(({ id, name, artists }) => {
      return {
        id,
        name,
        artists: artists.map(({ name }) => name).join(', '),
      };
    });

    return tracks;
  }

  async getAudioFeatures(trackIds) {
    const accessToken = await this.getAccessToken();
    
    const res = await axios.get(
      `https://api.spotify.com/v1/audio-features/?ids=${trackIds}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const audioFeatures = res.data.audio_features.map((features, idx) => {
      return {
        name: tracks[idx].name,
        artists: tracks[idx].artists,
        features,
      };
    });

    return audioFeatures;
  }
}
