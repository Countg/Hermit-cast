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
    axios
      .get(`${api.base}key=${api.key}&q=auto:ip&aqi=no`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>HERMiT-CAST</h1>
        <div className='tagline'>
          <p>
            This app uses the forecast to help you avoid being productive.
          </p>
          <span style={{color:'white', fontSize: '0.5em', display: 'block', marginTop: '0.5em' }}>
            (If you suddenly feel existential anxiety, consult a physician)
          </span>
        </div>
        <h2>Waiting for weather in your area</h2>
        {data ? <WeatherDisplay data={data} /> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
