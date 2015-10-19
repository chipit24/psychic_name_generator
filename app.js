// (function () {
  'use strict';

  // For Google Translate API (for voice)
  var baseURL = 'http://translate.google.com/translate_tts?ie=UTF-8&tl=en-us&client=t&q=';

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
    $('#name').val(name);

    $.ajax(baseURL+name, {
      success: function (data) {
        console.log(data);
      }
    });
  }
// })();