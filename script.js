'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const rendercountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open('get', 'https://restcountries.com/v3.1/name/${country}');
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render国家1
    rendercountry(data);

    //获取邻国(2)
    const [neighbor] = data.borders;

    if (!neighbor) return;

    //AJAX调用国家2
    const request2 = new XMLHttpRequest();
    request2.open('get', 'https://restcountries.com/v3.1/alpha/${neighbor}');
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      rendercountry(data2, 'neighbor');
    });
  });
};

getCountryAndNeighbor('usa');
getCountryAndNeighbor('china');
getCountryAndNeighbor('germany');

const getCountryDate = function (country) {
  fetch('https://restcountries.com/v3.1/name/${country}')
    .then(response => response.json())
    .then(data => rendercountry(data[0]));
  const neighbor = data[0].borders[0];

  if (!neighbor) return;

  //国家2
  return fetch('https://restcountries.com/v3.1/alpha/${neighbor}');

  fetch('https://restcountries.com/v3.1/alpha/${neighbor}')
    .then(response => json())
    .then(data => rendercountry(data, 'neighbor'));
};

getCountryDate('usa');
