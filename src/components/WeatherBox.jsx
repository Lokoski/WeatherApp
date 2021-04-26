import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import { fetchWeather } from "../api/fetchWeather.jsx";

function WeatherBox() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null
  });

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather({
        temp: toFar(data.main.temp),
        desc: data.weather[0].main,
        city: data.name,
        tempMax: toFar(data.main.temp_max),
        tempMin: toFar(data.main.temp_min),
        feelsLike: toFar(data.main.feels_like),
        country: data.sys.country,
        icon: data.weather[0].icon,
      });
      setQuery("");
    }
  };

  const searchWeatherButton = async (e) => {
    const data = await fetchWeather(query);
    setWeather({
      temp: toFar(data.main.temp),
      desc: data.weather[0].main,
      city: data.name,
      tempMax: toFar(data.main.temp_max),
      tempMin: toFar(data.main.temp_min),
      feelsLike: toFar(data.main.feels_like),
      country: data.sys.country,
      icon: data.weather[0].icon
    });
    setQuery("");
  };

  function toFar(temp) {
    return ((temp - 273.14) * (9.0 / 5.0) + 32).toFixed(0);
  }

  return (
    <div className="weather-box">
      <header className="header">
        <h2>Weather</h2>
        <div className="search-div">
          <input
            placeholder="Search..."
            className="search-input"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={searchWeather}
          />
          <button className="material-icons" onClick={searchWeatherButton}>
            search
          </button>
        </div>
      </header>
      <section className="weather-info">
        {weather.temp === null ? (
          <p>
            Please enter a city name<i className="material-icons">wb_sunny</i>
          </p>
        ) : (
          <WeatherInfo weather={weather} />
        )}
      </section>
    </div>
  );
}

export default WeatherBox;
