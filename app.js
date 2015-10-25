'use strict';

var msg = new SpeechSynthesisUtterance();
speechSynthesis.onvoiceschanged = function () {
  msg.voice = speechSynthesis.getVoices()[3]; // Google UK English Male
};

// Set up our word dictionaries
var adjectives = [
  'Spiritual',
  'Esoteric',
  'Solar',
  'Natural',
  'Astral',
  'Shimmering',
  'Angelic',
  'Holy',
  'Prophetic',
  'Serendipitous',
  'Magical',
  'Psychic',
  'Open',
  'Mindful',
  'Peaceful',
  'White'
];

var nouns = [
  'moon',
  'light',
  'sun',
  'star',
  'planet',
  'flower',
  'rain'
];

var types = [
  'walker',
  'angel',
  'spirit',
  'fairy',
  'gem',
  'unicorn',
  'butterfly',
];

var generateName = function (e) {
  e.preventDefault(); 

  var name = adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' +
    nouns[Math.floor(Math.random() * nouns.length)] + ' ' +
    types[Math.floor(Math.random() * types.length)];

  // Generated names will be of the form adjective + noun + type
  document.getElementById('name').value = name;

  // Say the name
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    msg.text = name;
    speechSynthesis.speak(msg);
  }
};
