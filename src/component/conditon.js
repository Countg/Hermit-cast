import { BsCloudRainFill, BsCloudsFill, BsFillCloudSnowFill, BsFillSunFill } from "react-icons/bs";
import { FaSmog } from "react-icons/fa";
import {
  coldQuotes,
  hotQuotes,
  snowQuotes,
  rainQuotes,
  sunnyQuotes,
  smogQuotes,
} from '../lib/quotes';

// Pick a random quote from an array
const getRandomQuote = (quotesArray) => {
  if (!quotesArray || quotesArray.length === 0) return "";
  const index = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[index].text;
};

const conditionCodeMap = {
  1000: { icon: <BsFillSunFill size={40} color="#f9ff33" />, quote: getRandomQuote(sunnyQuotes) }, // Sunny
  1003: { icon: <BsCloudsFill size={40} color="#dd219e" />, quote: getRandomQuote(sunnyQuotes) }, // Partly cloudy
  1006: { icon: <BsCloudsFill size={40} color="#aaaaaa" />, quote: getRandomQuote(sunnyQuotes) }, // Cloudy
  1009: { icon: <BsCloudsFill size={40} color="#555555" />, quote: getRandomQuote(sunnyQuotes) }, // Overcast
  1030: { icon: <FaSmog size={40} color="#888888" />, quote: getRandomQuote(smogQuotes) }, // Mist
  1063: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Patchy rain
  1066: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Snow
  1087: { icon: <BsCloudRainFill size={40} color="#2196f3" />, quote: getRandomQuote(rainQuotes) }, // Thunder
  1114: { icon: <BsCloudsFill size={40} color="#dddddd" />, quote: getRandomQuote(sunnyQuotes) }, // Blowing snow
  1117: { icon: <BsCloudsFill size={40} color="#dddddd" />, quote: getRandomQuote(sunnyQuotes) }, // Blizzard
  1135: { icon: <FaSmog size={40} color="#888888" />, quote: getRandomQuote(smogQuotes) }, // Fog
  1147: { icon: <FaSmog size={40} color="#888888" />, quote: getRandomQuote(smogQuotes) }, // Freezing fog
  1150: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Light drizzle
  1153: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Light drizzle
  1168: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Freezing drizzle
  1171: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Heavy freezing drizzle
  1180: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Patchy light rain
  1183: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Light rain
  1186: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Moderate rain at times
  1189: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Moderate rain
  1192: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Heavy rain at times
  1195: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Heavy rain
  1198: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Light freezing rain
  1201: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Moderate or heavy freezing rain
  1204: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Light sleet
  1207: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Moderate or heavy sleet
  1210: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Patchy light snow
  1213: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Light snow
  1216: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Patchy moderate snow
  1219: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Moderate snow
  1222: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Patchy heavy snow
  1225: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Heavy snow
  1237: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Ice pellets
  1240: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Light rain shower
  1243: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Moderate or heavy rain shower
  1246: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Torrential rain shower
  1249: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Light sleet showers
  1252: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Moderate or heavy sleet showers
  1255: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Light snow showers
  1258: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Moderate or heavy snow showers
  1261: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Light showers of ice pellets
  1264: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Moderate or heavy showers of ice pellets
  1273: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Patchy light rain with thunder
  1276: { icon: <BsCloudRainFill size={40} color="#09f7ea" />, quote: getRandomQuote(rainQuotes) }, // Moderate or heavy rain with thunder
  1279: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Patchy light snow with thunder
  1282: { icon: <BsFillCloudSnowFill size={40} color="#FF5733" />, quote: getRandomQuote(snowQuotes) }, // Moderate or heavy snow with thunder
};



// Example usage in your weather mapping:
export const getWeatherFeedback = (data) => {
  if (!data?.current) {
    return {
      icon: null,
      quote: "I have no idea what to say. I guess you can stick your head out a window and find out",
    };
  }

  

  const { code, temp_c } = data.current.condition;
  const temp = data.current.feelslike_c;
  
  
// First try using condition code
  if (conditionCodeMap[code]) {
    const { icon, quote } = conditionCodeMap[code];
    return {
      icon,
      quote: typeof quote === "function" ? quote(temp) : quote,
    };
  }
  
  // Condition-based icons and quotes
    const weatherText = data.current.condition.text.toLowerCase();
  const conditionMap = [
    {
      match: ["rain", "thunder", "mist", "drizzle", "fog"],
      icon: <BsCloudRainFill size={40} color="#09f7ea" />,
      quote: getRandomQuote(rainQuotes),
    },
    {
      match: ["snow"],
      icon: <BsFillCloudSnowFill size={40} color="#FF5733" />,
      quote: getRandomQuote(snowQuotes),
    },
    {
      match: ["cloud", "overcast"],
      icon: <BsCloudsFill size={40} color="#dd219e" />,
      quote: (temp) => (temp >= 5 ? getRandomQuote(hotQuotes) : getRandomQuote(coldQuotes)),
    },
    {
      match: ["sun", "clear"],
      icon: <BsFillSunFill size={40} color="#f9ff33" />,
      quote: getRandomQuote(sunnyQuotes),
    },
    {
      match: ["haze", "smoke", "dust", "ash", "smog"],
      icon: <FaSmog size={40} color="#888888" />,
      quote: getRandomQuote(smogQuotes),
    },
  ];



  for (const { match, icon, quote } of conditionMap) {
    if (match.some((word) => weatherText.includes(word))) {
      return {
        icon,
        quote: typeof quote === "function" ? quote(temp) : quote,
      };
    }
  }

  // Fallback
  return {
    icon: <BsCloudsFill size={40} color="#ccc" />,
    quote: "Weather is confusing today!",
  };
};
