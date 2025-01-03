'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open('get', 'https://restcountries.com/v3.1/name/usa');
request.send();
console.log(this.responseText);

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
});
