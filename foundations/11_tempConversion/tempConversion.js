const convertToCelsius = function (temperature) {
  let temperatureInCelsius = (temperature - 32) * (5 / 9);
  temperatureInCelsius = temperatureInCelsius.toFixed(1);
  console.log(temperatureInCelsius);
};

const convertToFahrenheit = function (temperature) {
  let temperatureInFahrenheit = temperature * (9 / 5) + 32;
  temperatureInFahrenheit = temperatureInFahrenheit.toFixed(1);
  console.log(temperatureInFahrenheit);
};

convertToCelsius(45);
convertToFahrenheit(0);
