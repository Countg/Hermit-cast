import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  coldQuotes,
  hotQuotes,
  snowQuotes,
  rainQuotes,
  sunnyQuotes,
} from './lib/quotes';

import {
  BsFillCloudSnowFill,
  BsCloudRainFill,
  BsFillSunFill,
  BsCloudsFill,
} from 'react-icons/bs';

import './App.css';

const api = {
  key: process.env.REACT_APP_WEATHER_API,
  base: 'http://api.openweathermap.org/data/2.5/',
};

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [data, setData] = useState([]);

  // random quotes

  let tempQuotes = [];
  const hotInx = Math.floor(Math.random() * hotQuotes.length);
  const coldIndx = Math.floor(Math.random() * coldQuotes.length);
  const snowIndx = Math.floor(Math.random() * snowQuotes.length);
  const rainIndx = Math.floor(Math.random() * rainQuotes.length);
  const sunIndx = Math.floor(Math.random() * sunnyQuotes.length);

  const cold = coldQuotes[coldIndx].text;
  const hot = hotQuotes[hotInx].text;
  const sun = sunnyQuotes[sunIndx].text;
  const rain = rainQuotes[rainIndx].text;
  const snow = snowQuotes[snowIndx].text;

  if (typeof data.main === 'undefined') {
    tempQuotes.push('');
  } else if (
    data.weather[0].main === 'Clear' ||
    (data.weather[0].main === 'Clouds' && data.main.temp >= 5)
  ) {
    tempQuotes.push(hot);
  } else if (
    data.weather[0].main === 'Clear' ||
    (data.weather[0].main === 'Clouds' && data.main.temp < 5)
  ) {
    tempQuotes.push(cold);
  } else if (data.weather[0].main === 'Sunny') {
    tempQuotes.push(sun);
  } else if (data.weather[0].main === 'Rain') {
    tempQuotes.push(rain);
  } else if (data.weather[0].main === 'Snow') {
    tempQuotes.push(snow);
  }

  // Icon change
  let weatherIcon = [];
  if (typeof data.main === 'undefined') {
    weatherIcon.push('');
  } else if (data.weather[0].main === 'Rain') {
    weatherIcon.push(<BsCloudRainFill size={40} color='#09f7ea' />);
  } else if (data.weather[0].main === 'Clouds') {
    weatherIcon.push(<BsCloudsFill size={40} color='#dd219e' />);
  } else if (data.weather[0].main === 'Snow') {
    weatherIcon.push(<BsFillCloudSnowFill size={40} color='#FF5733' />);
  } else if (
    data.weather[0].main === 'Sunny' ||
    data.weather[0].main === 'Clear'
  ) {
    weatherIcon.push(<BsFillSunFill size={40} color='#f9ff33' />);
  }

  // location and weather api fetch
  function isLocation() {
    return new Promise((res) => {
      setTimeout(function () {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          });
        } else {
          console.log('Not Available');
        }

        res();
      }, 200);
    });
  }

  function isWeather() {
    axios
      .get(
        `${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}`
      )
      .then((res) => {
        setData(res.data);
      });
  }

  useEffect(() => {
    async function finalForm() {
      await isLocation();
      isWeather();
    }
    finalForm();
  }, [latitude, longitude]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>HERMiT-CAST</h1>
        {typeof data.main == 'undefined' ? (
          <h1>Waiting for weather in your area</h1>
        ) : (
          <div className='temp-info'>
            <h2>
              The current temperature in {data.name} is{' '}
              {Math.round(data.main.temp)}˚ {weatherIcon}
            </h2>
            <h6>Why you should stay home:</h6>
            <p>{tempQuotes}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
