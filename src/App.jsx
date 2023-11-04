import "./App.css";
import { useEffect } from "react";
import Weather from "./components/Weather";
import axios from "axios";
import { useState } from "react";
import { bgTemp } from "./utils/bg";
import Loader from "./components/Loader";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [bgclima, setBgclima] = useState(bgTemp);
  const [isDark, setIsDark] = useState(false);

  const KEY = "6ad50d7a14403354d3d83d4d8490764a";

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = KEY;

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios
      .get(URL)
      .then(({ data }) => {
        setWeatherInfo(data);
        updateBackground(data.weather[0].main);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitCountry = (e) => {
    e.preventDefault();
    const cityName = e.target.cityName.value;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}`
      )
      .then(({ data }) => {
        setWeatherInfo(data);
        updateBackground(data.weather[0].main);
      })
      .catch((err) => console.log(err));
  };

  const updateBackground = (weatherCondition) => {
    const newBg = bgTemp[weatherCondition];
    setBgclima(newBg);
  };

  const handleToggoleIsDark = () => setIsDark(!isDark);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <main
      className={`img-bg ${bgclima} font-primary-font flex flex-col justify-center items-center min-h-screen relative`}
    >
      <div className="dark:bg-black/50 transition-colors dark:min-h-screen dark:min-w-full dark:absolute"></div>
      {weatherInfo ? (
        <Weather
          weatherInfo={weatherInfo}
          handleSubmitCountry={handleSubmitCountry}
          handleToggoleIsDark={handleToggoleIsDark}
          isDark={isDark}
        />
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default App;
