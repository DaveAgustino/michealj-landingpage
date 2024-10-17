// Import Howler.js
const Howler = require('howler').Howler;

// Define your audio file path
const musicPath = '/music/Billie Jean.mp3'; // Replace with your audio path

// Create a new Howler sound object
const music = new Howler({
  src: [musicPath],
  loop: true,
  autoplay: true,
  preload: true, // Preload for faster playback
  volume: 0.5, // Adjust volume (0 to 1)
});