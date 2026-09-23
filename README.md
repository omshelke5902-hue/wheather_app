# 🌤️ Weather App

A simple, responsive weather application that lets users search for any city and instantly view current weather conditions using the OpenWeatherMap REST API.

## 🔗 Live Demo
[https://omshelke5902-hue.github.io/weather-app/](https://omshelke5902-hue.github.io/weather-app/)


## ✨ Features
- 🔍 Search weather by city name
- 🌡️ Displays temperature, "feels like", humidity, and wind speed
- 🖼️ Dynamic weather icons based on current conditions
- 📱 Fully responsive design (mobile & desktop)
- ⚡ Real-time data fetched from a live REST API
- ⚠️ Error handling for invalid city names

## 🛠️ Built With
- **HTML5** – structure
- **CSS3** – styling & responsive layout
- **JavaScript (ES6+)** – logic & DOM manipulation
- **Fetch API** – asynchronous HTTP requests
- **OpenWeatherMap REST API** – live weather data (JSON)

## 📂 Project Structure
```
weather-app/
├── index.html      # Main HTML structure
├── style.css        # Styling and responsive design
├── script.js         # API calls and DOM logic
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/weather-app.git
   cd weather-app
   ```
2. Open `script.js` and add your API key:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```
3. Open `index.html` in your browser (or use the VS Code "Live Server" extension)

## 🌐 How It Works
1. User types a city name and clicks **Search**
2. The app sends a request to the OpenWeatherMap API using the Fetch API
3. The JSON response is parsed and relevant weather data is extracted
4. The DOM is updated dynamically to display the results
5. If the city isn't found, an error message is shown instead

## 📖 What I Learned
- Making asynchronous API calls with `fetch()` and `async/await`
- Parsing and working with JSON data from a real-world REST API
- Handling errors gracefully in network requests
- Building a responsive UI with plain CSS (no frameworks)
- Deploying a static site using GitHub Pages

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author
**Om Shelke**
- GitHub: [@Om Shelke](https://github.com/omshelke5902-hue)
