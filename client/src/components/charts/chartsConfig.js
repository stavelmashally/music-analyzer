
export const FEATURES = [
  'danceability',
  'energy',
  'speechiness',
  'acousticness',
  'liveness',
  'valence',
];

export const FEATURE_INFO = {
  acousticness:
    'A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.',
  danceability:
    'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.',
  energy:
    'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.',
  liveness:
    'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.',
  speechiness:
    'Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value.',
  valence:
    'A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).',
};

export const generateColor = () => {
  return '#' + Math.random().toString(16).substr(-6);
};
