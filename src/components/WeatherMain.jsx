import PropTypes from "prop-types";
import {
  vientoD,
  viento,
  humedadD,
  humedad,
  presionD,
  presion,
} from "./../utils/index";
import Layout from "../layout/Layout";
import LineMargin from "../layout/LineMargin";

const WeatherMain = ({ weatherInfo, isDark }) => {
  return (
    <>
      <Layout>
        <div>
          <img className="sm:w-7" src={isDark ? vientoD : viento} alt="" />
        </div>
        <span className="sm:text-xl">
          {weatherInfo?.wind.speed}
          m/s
        </span>
      </Layout>

      <LineMargin />

      <Layout>
        <div>
          <img className="sm:w-7" src={isDark ? humedadD : humedad} alt="" />
        </div>
        <span className="sm:text-xl">{weatherInfo?.main.humidity}%</span>
      </Layout>

      <LineMargin />

      <Layout>
        <div>
          <img className="sm:w-7" src={isDark ? presionD : presion} alt="" />
        </div>
        <span className="sm:text-xl">
          {weatherInfo?.main.pressure}
          hPa
        </span>
      </Layout>
    </>
  );
};

WeatherMain.propTypes = {
  weatherInfo: PropTypes.object,
  isDark: PropTypes.bool,
};

export default WeatherMain;
