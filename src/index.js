const state = {
  temperature: 70,
};
const updateTemperature = () => {
  const tempValue = document.getElementById('tempValue');
  tempValue.textContent = state.temperature;
};

const tempDown = document.getElementById('decreaseTempControl');

const tempUp = document.getElementById('increaseTempControl');

// const tempValue = document.getElementById('tempValue');

const tempColorChange = (event) => {
  const colorClasses = ['red', 'orange', 'yellow', 'green', 'teal'];
  const tempFont = document.getElementById('tempValue');

  if (state.temperature >= 80) {
    tempFont.classList.remove(...colorClasses);
    tempFont.classList.add('red');
  } else if (state.temperature >= 70 && state.temperature < 80) {
    tempFont.classList.remove(...colorClasses);
    console.log(tempFont);
    tempFont.classList.add('orange');
  } else if (state.temperature >= 60 && state.temperature < 70) {
    tempFont.classList.remove(...colorClasses);
    tempFont.classList.add('yellow');
  } else if (state.temperature >= 50 && state.temperature < 60) {
    tempFont.classList.remove(...colorClasses);
    tempFont.classList.add('green');
  } else if (state.temperature < 50) {
    tempFont.classList.remove(...colorClasses);
    tempFont.classList.add('teal');
  }
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
    changeLandscape();
  });
  tempDown.addEventListener('click', () => {
    state.temperature -= 1;
    updateTemperature();
    changeLandscape();
  });
//   tempValue.addEventListener('click', tempColorChange);
  tempUp.addEventListener('click', () => {
    tempColorChange();
  });
  tempDown.addEventListener('click', () => {
    tempColorChange();
  });
};

changeLandscape();

document.addEventListener("DOMContentLoaded", registerEventHandlers);
