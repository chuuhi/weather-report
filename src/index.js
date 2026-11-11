const state = {
  temperature: 70,
};

const updateTemperature = () => {
  const tempValue = document.getElementById('tempValue');
  tempValue.textContent = state.temperature;
};

const tempUp = document.getElementById('increaseTempControl');
const tempDown = document.getElementById('decreaseTempControl');

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
};

changeLandscape();
tempColorChange();

document.addEventListener('DOMContentLoaded', registerEventHandlers);
