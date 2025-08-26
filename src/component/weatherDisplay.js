
import {getWeatherFeedback} from './conditon';

const WeatherDisplay = ({ data }) => {
  const { icon: weatherIcon, quote } = getWeatherFeedback(data);
  const weatherText = data.current.condition.text;
  console.log("Weather condition text:", weatherText);


  return (
   <div className="temp-info">
  <h2>
    The current temperature in {data.location.name} is {Math.round(data.current.feelslike_c)}˚
  </h2>
  <div className="weather-icon"><span>{weatherText}</span>{weatherIcon}</div>
  <h6>Why you should stay inside and shut down:</h6>
  <p>{quote}</p>
</div>
  );
};

export default WeatherDisplay;