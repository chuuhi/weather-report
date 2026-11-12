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
        //   lat: lat,
        //   lon: lon,
          q: 'Seatte',
          format: 'json',
        },
      },
    );

    // const latitude = response.data[0].lat;
    // const longitude = response.data[0].lon;
    // const displayName = response.data[0].display_name;

    console.log(
      'success in getWeatherByLocation!',
    //   latitude,
    //   longitude,
    //   displayName,
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