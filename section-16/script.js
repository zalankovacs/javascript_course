'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = ''){
    const html = `
      <article class="country">
          <img class="country__img" src="${className}" />
          <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${data.languages[0]?.name}</p>
             <p class="country__row"><span>💰</span>${data.currencies[0]?.name}</p>
          </div>
    </article>`;
  
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
}

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}
///////////////////////////////////////

/*const getCountryData = function (country) {
  const request = new XMLHttpRequest(); //kérés
  console.log(country);
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  console.log(request.responseText);

  request.addEventListener('load', function () {
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0]?.name}</p>
           <p class="country__row"><span>💰</span>${data.currencies[0]?.name}</p>
        </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
*/

/*
const getCountryAndNeighbour = function (country) {

    // AJFAX call country 1
    const request = new XMLHttpRequest(); //kérés

    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
  
  
    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
    //   Render country 1
      renderCountry(data);
      
    //   Get a neighbour country 2//szomszed
    const [neighbour] = data.borders;

    if(!neighbour) return;

    // AJFAX call country 2
    const request2 = new XMLHttpRequest(); //kérés
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function() {
        const [data2] = JSON.parse(this.responseText);
        
        renderCountry(data2, 'neighbour')
    })
    });
  };
  
//   getCountryAndNeighbour('portugal');

getCountryAndNeighbour('usa');

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
*/

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
//         // response = valasz
//         console.log(response);
//         return response.json();
//     }).then(function(data) {
//         renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dasfsf';

//       if (!neighbour) return;

//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Neighbour not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🧨🧨🧨`);
//       renderError(`Something went wrong 🧨🧨🧨 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    console.log(response);
    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}, 'Country not found'`)

    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}, 'Country not found'`);
    })
    
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 🧨🧨🧨`);
      renderError(`Something went wrong 🧨🧨🧨 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('dasfsf'); // Nem kell meghívni, mert már a gomb eseménykezelője indítja a kérést
*/
// Challenge #1
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then(response => {
      if (!res.ok)
        throw new Error(`Country not found (${res.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => console.log(`${err.message} 💣`));
};
whereAmI(46.4316233, 25.8147378);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
*/
/*
console.log(`Test start`);
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('resolved promise 2').then(res => {
  for(let i = 0; i < 10000; i++) {}
  console.log(res);
});

console.log('Test end');
*/
/*
const lotteryPromise = new Promise(function(resolve, reject) {

  console.log(`Lotter draw is happening!!`);
  setTimeout(function() {
    if(Math.random() >= 0.5){
      resolve(`You WIN 🏆`);
    }else{
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);

});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisiflying setTimeout
const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1).then(() => {
  console.log(`I waited for 2 seconds`)
  return wait(1);
}).then(() => console.log(`I waited for 1 second`));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//       console.log('2 second passed');
//       setTimeout(() => {
//           console.log('3 second passed');
//           setTimeout(() => {
//               console.log('4 second passed');
//           }, 1000)
//       }, 1000)
//   }, 1000)
// }, 1000)

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('abc')).catch(x => console.error(x));
*/
/*
const getPosition = function() {
  return new Promise(function(resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

// getPosition().then(pos => console.log(pos));

const whereAmI = function (lat, lng) {
  getPosition()
    .then(pos => {
      const {latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => console.log(`${err.message} 💣`));
};

btn.addEventListener('click', whereAmI);
*/

// Coding challenge #2
/*
const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function() {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function(){
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return wait(2); // Várj további 2 másodpercet itt
  })
  .then(() => createImage('img/img-2.jpg')) // A második kép létrehozása nélküli várakozás
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then (() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

const getPosition = function() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

const whereAmI = async function (country) {
  try{
    // Geolocation
  const pos = await getPosition();
  const {latitude: lat, longitude: lng } = pos.coords;

  // Reverse geoCoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if(!resGeo.ok) throw new Error('Problem getting location data');

  const dataGeo = resGeo.json()

  // Country data
  // fetch(
  //   `https://restcountries.com/v3.1/name/${country}`
  // ).then(res => console.log(res));

  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  if(!resGeo.ok) throw new Error('Problem getting country');

  const data = await res.json();
  renderCountry(data[0]);} catch(err){
    console.error(`${err} 💥`);
    renderCountry(`💥 ${err.message}`);
  }
};
console.log('1: Will get location');
whereAmI('portugal');
console.log('3: Finished getting location');
