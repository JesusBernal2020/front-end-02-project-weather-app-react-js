import PropTypes from "prop-types";
import { useState } from "react";
import "./styles/Weather.css";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp";
import WeatherMain from "./WeatherMain";
import { weatherImages } from "../utils/icons";
import Btndark from "./Btndark";

const Weather = ({
  weatherInfo,
  handleSubmitCountry,
  handleToggoleIsDark,
  isDark,
}) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleIsCelsius = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <section className="grid gap-7 sm:gap-11 relative">
      {/*search and darkMode */}
      <article className="flex flex-col items-center gap-4">
        <Btndark handleToggoleIsDark={handleToggoleIsDark} />
        <form
          onSubmit={handleSubmitCountry}
          action=""
          className="max-w-max mx-auto"
        >
          <div className="flex rounded-md overflow-hidden shadow-lg">
            <input
              className="px-2 sm:w-64 outline-none"
              type="text"
              id="cityName"
            />
            <button className="bg-blue-400 hover:bg-blue-500 transition-all ease-in-out text-white py-1 px-2 sm:py-2 sm:px-4">
              Buscar
            </button>
          </div>
        </form>
      </article>

      {/*clima box */}

      <article className="grid gap-8 ">
        <h1 className="font-bold text-2xl text-center sm:text-3xl dark:text-white dark:drop-shadow-lg">
          {`${weatherInfo?.name}, ${weatherInfo?.sys.country}`}
        </h1>
        <article className="flex flex-col sm:flex-row gap-6">
          {/*parte de arriba */}

          <section className="card-clima p-5 shadow-2xl bg-[rgba(132, 132, 132, 0.5);]">
            <h2 className="text-center capitalize sm:text-2xl dark:text-white">
              {weatherInfo?.weather[0].description}
            </h2>
            <div className="flex justify-center items-center gap-3">
              <span className="text-4xl dark:text-white sm:text-7xl">
                {isCelsius
                  ? kelvinToCelsius(weatherInfo?.main.temp)
                  : kelvinToFahrenheit(weatherInfo?.main.temp)}
              </span>
              <div className="w-32 sm:w-52">
                <img
                  className="mx-auto sm:w-80"
                  src={weatherImages[weatherInfo?.weather[0].icon]}
                  alt=""
                />
              </div>
            </div>
          </section>

          {/*parte de abajo */}

          <section className="card-clima flex justify-around gap-3 py-4 shadow-xl sm:flex-col px-3">
            <WeatherMain isDark={isDark} weatherInfo={weatherInfo} />
          </section>
        </article>
        <div className=" flex justify-center sm:pt-6">
          <button
            className="rounded-2xl bg-white w-36 p-2 shadow-2xl hover:bg-blue-500  hover:text-white transition-all ease-in-out text-blue-500 dark:bg-blue-600 dark:hover:bg-blue-400 dark:text-white sm:text-xl sm:w-44"
            onClick={handleIsCelsius}
          >
            Cambiar {isCelsius ? "F°" : "C°"}
          </button>
        </div>
      </article>
    </section>
  );
};

Weather.propTypes = {
  weatherInfo: PropTypes.object,
  handleSubmitCountry: PropTypes.func,
  handleToggoleIsDark: PropTypes.func,
  isDark: PropTypes.bool,
};

export default Weather;
