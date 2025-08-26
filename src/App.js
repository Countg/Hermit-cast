import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './component/weatherDisplay';

import './App.css';

const api = {
  key: process.env.REACT_APP_WEATHER_API,
  base: 'https://api.weatherapi.com/v1/current.json?',
};

function App() {

  const [data, setData] = useState(null);
  





// Fetch weather 

  
  useEffect(() => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;  
    axios
      .get(`${api.base}key=${api.key}&q=${latitude},${longitude}&aqi=no`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, 
  (error) => {
    console.error("Error getting location:", error);
    // Fallback to a default location if geolocation fails
     fetchByIPFallback();
      }
      );
    }
    else {
         fetchByIPFallback();
      }
  function fetchByIPFallback() {
    axios
      .get(`${api.base}key=${api.key}&q=auto:ip&aqi=no`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }
  },
  [ api.base, api.key ]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>HERMiT-CAST</h1>
        <div className='tagline'>
          <p>
           A productivity app, that uses your local forcast to help you avoid productivity.
          </p>
          <span style={{color:'orange', fontSize: '0.5em', display: 'block', marginTop: '0.5em' }}>
           Warning: May cause existential anxiety.
          </span>
        </div>
        <h2>Waiting for weather in your area</h2>
        {data ? <WeatherDisplay data={data} /> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
