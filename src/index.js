// 'use strict'; reemember to export

const state = {
  temperature: 70,
};

const updateTemperature = () => {
  const tempValue = document.getElementById('tempValue');
  tempValue.textContent = state.temperature;
};

const tempUp = document.getElementById('increaseTempControl');
const tempDown = document.getElementById('decreaseTempControl');
const cityNameInput = document.getElementById('cityNameInput');
const cityNameDisplay = document.getElementById('headerCityName');
const cityNameButton = document.getElementById('cityNameReset');
const currentTempButton = document.getElementById('currentTempButton');

const tempColorChange = () => {
  const tempClasses = {
    0: 'teal',
    50: 'green',
    60: 'yellow',
    70: 'orange',
    80: 'red',
  };

  const tempFont = document.getElementById('tempValue');

  let colorInd = Math.floor(state.temperature / 10) * 10;
  if (colorInd < 50) {
    colorInd = 0;
  }
  tempFont.classList.remove(...Object.values(tempClasses));
  tempFont.classList.add(tempClasses[colorInd]);
};

const changeLandscape = () => {
  const landscape = document.getElementById('landscape');
  if (state.temperature >= 80) {
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (state.temperature >= 70 && state.temperature < 80) {
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (state.temperature >= 60 && state.temperature < 70) {
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.temperature < 60) {
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};

const updateCityName = () => {
  cityNameDisplay.textContent = cityNameInput.value;
};

const resetCityName = () => {
  cityNameDisplay.textContent = 'Seattle';
  cityNameInput.value = 'Seattle';
};

const tempApiCall = () => {
  getWeatherByLocation('47.6062', '122.3321');
};

const registerEventHandlers = () => {
  tempUp.addEventListener('click', () => {
    state.temperature += 1;
    updateTemperature();
    tempColorChange();
    changeLandscape();
  });
  tempDown.addEventListener('click', () => {
    state.temperature -= 1;
    updateTemperature();
    tempColorChange();
    changeLandscape();
  });
  cityNameInput.addEventListener('input', () => {
    updateCityName();
  });
  cityNameButton.addEventListener('click', () => {
    resetCityName();
  });
  currentTempButton.addEventListener('click', () => {
    tempApiCall();
  });

};

changeLandscape();
tempColorChange();

document.addEventListener('DOMContentLoaded', registerEventHandlers);


// const axios = require('axios');

const findLatitudeAndLongitude = async (query) => {
  // Return the promise chain created by the axios call
  try {
    const response = await axios.get(
      'https://ada-weather-report-proxy-server.onrender.com/location',
      {
        params: {
          q: query,
          format: 'json',
        },
      },
    );

    const latitude = response.data[0].lat;
    const longitude = response.data[0].lon;
    const displayName = response.data[0].display_name;

    console.log(
      'success in findLatitudeAndLongitude!',
      latitude,
      longitude,
      displayName,
    );

    return { latitude, longitude, displayName }; // Return the data we want to pass on
  } catch (error) {
    console.log('error in findLatitudeAndLongitude!');
    throw error;
    // console.log(error); // If we want to see more info about the issue
  }
};

const getWeatherByLocation = async (lat, lon) => {
  try {
    const response = await axios.get(
      'https://ada-weather-report-proxy-server.onrender.com/weather',
      {
        params: {
          lat: lat,
          lon: lon,
          format: 'json',
        },
      },
    );

    // const latitude = response.data[0].lat;
    // const longitude = response.data[0].lon;
    // const displayName = response.data[0].display_name;

    console.log(
      'success in getWeatherByLocation!',
      lat,
      lon,
      displayName,
    );

    // return { latitude, longitude, displayName }; // Return the data we want to pass on
  } catch (error) {
    console.log('error in findLatitudeAndLongitude!');
    throw error;
    // console.log(error); // If we want to see more info about the issue
  }
};

// getWeatherByLocation('Seattle');
getWeatherByLocation('47.6062', '122.3321');

/*
const getLocationFromQuery = async (query) => {
  // Make the first API call to get latitude and longitude
  try {
    const coordinates = await findLatitudeAndLongitude(query);
    // return wait(1000).then(() => {
    // `coordinates` is the data returned from the findLatitudeAndLongitude promise

    return await getWeatherByLocation(coordinates.latitude, coordinates.longitude);
    // });
  } catch (error) {
    console.log('getLocationFromQuery: error fetching location from query!');
    throw error;
    // console.log(error); // If we want to see more info about the issue
  }
};
//
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();

}

function displayWeatherInfo(data){
    const {name: city,
           main: {temp, humidity},
           weather: [{description,id}]} = data;

    card.textContent = "";
    card.style.display = "flex";


}

*/