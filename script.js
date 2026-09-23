const apiKey = ""; // 
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherInfo = document.getElementById("weatherInfo");

searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") getWeather();
});

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    weatherInfo.innerHTML = "<p>Loading...</p>";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherInfo.innerHTML = `<p>${error.message}</p>`;
  }
}

function displayWeather(data) {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <img src="${iconUrl}" alt="${weather[0].description}">
    <p>${weather[0].description}</p>
    <p>Temperature: ${main.temp}°C</p>
    <p>Feels like: ${main.feels_like}°C</p>
    <p>Humidity: ${main.humidity}%</p>
    <p>Wind Speed: ${wind.speed} m/s</p>
  `;
}
