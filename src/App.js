import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  coldQuotes,
  hotQuotes,
  snowQuotes,
  rainQuotes,
  sunnyQuotes,
  smogQuotes,
} from './lib/quotes';

import {
  BsFillCloudSnowFill,
  BsCloudRainFill,
  BsFillSunFill,
  BsCloudsFill,
  
} from 'react-icons/bs';

import { FaSmog } from "react-icons/fa";

import './App.css';

const api = {
  key: process.env.REACT_APP_WEATHER_API,
  base: 'http://api.weatherapi.com/v1/current.json?',
};

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [data, setData] = useState(null);
  


console.log(data);

  // random quotes

  let tempQuotes = [];
  const hotInx = Math.floor(Math.random() * hotQuotes.length);
  const coldIndx = Math.floor(Math.random() * coldQuotes.length);
  const snowIndx = Math.floor(Math.random() * snowQuotes.length);
  const rainIndx = Math.floor(Math.random() * rainQuotes.length);
  const sunIndx = Math.floor(Math.random() * sunnyQuotes.length);
  const smogIndx = Math.floor(Math.random() * smogQuotes.length);

  const cold = coldQuotes[coldIndx].text;
  const hot = hotQuotes[hotInx].text;
  const sun = sunnyQuotes[sunIndx].text;
  const rain = rainQuotes[rainIndx].text;
  const snow = snowQuotes[snowIndx].text;
  const smog = smogQuotes[smogIndx].text;

  


// Safely read the values from the API response
const weatherMain = data?.current?.condition?.text; // WeatherAPI field
const temp = data?.current?.temp_c; // WeatherAPI temperature in Celsius

if (!data || !data.current) {
  tempQuotes.push(
    'I have no idea what to say. I guess you can stick your head out a window and find out'
  );
} else if (
  weatherMain?.toLowerCase().includes('clear') ||
  weatherMain?.toLowerCase().includes('overcast') ||
  (weatherMain?.toLowerCase().includes('cloudy') && temp >= 5)
) {
  tempQuotes.push(hot);
} else if (
  weatherMain?.toLowerCase().includes('cloudy') && temp < 5
) {
  tempQuotes.push(cold);
} else if (weatherMain?.toLowerCase().includes('sunny')) {
  tempQuotes.push(sun);
} else if (
  weatherMain?.toLowerCase().includes('rain') ||
  weatherMain?.toLowerCase().includes('thunder') ||
  weatherMain?.toLowerCase().includes('mist') ||
  weatherMain?.toLowerCase().includes('fog')
) {
  tempQuotes.push(rain);
} else if (weatherMain?.toLowerCase().includes('snow')) {
  tempQuotes.push(snow);
} else if (
  weatherMain?.toLowerCase().includes('haze') ||
  weatherMain?.toLowerCase().includes('smoke') ||
  weatherMain?.toLowerCase().includes('dust') ||
  weatherMain?.toLowerCase().includes('ash') ||
  weatherMain?.toLowerCase().includes('smog')
) {
  tempQuotes.push(smog);
} else {
  tempQuotes.push('Weather is confusing today!');
}

  

  // Icon change
let weatherIcon = null;

const weatherText = data?.current?.condition?.text?.toLowerCase(); // safe access

if (!weatherText) {
  weatherIcon = null; // or a placeholder
} else if (
  weatherText.includes("rain") ||
  weatherText.includes("thunder") ||
  weatherText.includes("mist") ||
  weatherText.includes("drizzle")
) {
  weatherIcon = <BsCloudRainFill size={40} color="#09f7ea" />;
} else if (weatherText.includes("cloud") || weatherText.includes("overcast")) {
  weatherIcon = <BsCloudsFill size={40} color="#dd219e" />;
} else if (weatherText.includes("snow")) {
  weatherIcon = <BsFillCloudSnowFill size={40} color="#FF5733" />;
} else if (weatherText.includes("sun") || weatherText.includes("clear")) {
  weatherIcon = <BsFillSunFill size={40} color="#f9ff33" />;
} else if (
  weatherText.includes("haze") ||
  weatherText.includes("smoke") ||
  weatherText.includes("smog")
) {
  weatherIcon = <FaSmog size={40} color="#888888" />;
}
  
  
  


// Fetch weather 

  useEffect(() => {
    let isMounted = true; // flag to prevent state update after unmount

    axios
      .get(`${api.base}key=${api.key}&q=auto:ip&aqi=no`)
      .then((res) => {
        if (isMounted) {
          setData(res.data); // store full API response
          console.log("Current weather condition:", res.data?.current?.condition?.text);
          
          // Optional: log all keys of current condition
          Object.entries(res.data?.current?.condition || {}).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
          });
        }
      })
      .catch((err) => console.error("Weather fetch error:", err));

    // cleanup function
    return () => {
      isMounted = false;
    };
  }, [api.base, api.key]);


  return (
   <div className='App'>
  <header className='App-header'>
    <h1>HERMiT-CAST</h1>

    { !data?.current?.condition?.text ? (
      <h1>Waiting for weather in your area</h1>
    ) : (
      <div className='temp-info'>
        <h2>
          The current temperature in {data.location.name} is{' '}
        {Math.round(data.current.feelslike_c)}˚ C {weatherIcon}
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
