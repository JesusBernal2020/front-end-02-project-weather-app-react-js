import PropTypes from "prop-types";
import {
  vientoD,
  viento,
  humedadD,
  humedad,
  presionD,
  presion,
} from "./../utils/index";

const WeatherMain = ({ weatherInfo, isDark }) => {
  return (
    <>
      <article className="flex gap-1 items-center dark:text-white">
        <div>
          <img className="sm:w-7" src={isDark ? vientoD : viento} alt="" />
        </div>
        <span className="sm:text-xl">
          {weatherInfo?.wind.speed}
          m/s
        </span>
      </article>

      <div className="w-[1px] h-9 sm:w-28 sm:h-[1px] bg-black/70 dark:bg-white"></div>

      <article className="flex gap-1 items-center dark:text-white">
        <div>
          <img className="sm:w-7" src={isDark ? humedadD : humedad} alt="" />
        </div>
        <span className="sm:text-xl">{weatherInfo?.main.humidity}%</span>
      </article>

      <div className="w-[0.7px] h-9 sm:w-28 sm:h-[1.3px] bg-black/70  dark:bg-white"></div>

      <article className="flex gap-1 items-center dark:text-white">
        <div>
          <img className="sm:w-7" src={isDark ? presionD : presion} alt="" />
        </div>
        <span className="sm:text-xl">
          {weatherInfo?.main.pressure}
          hPa
        </span>
      </article>
    </>
  );
};

WeatherMain.propTypes = {
  weatherInfo: PropTypes.object,
  isDark: PropTypes.bool,
};

export default WeatherMain;
