import cities from '../data/cities_of_turkey.json';
import { useContext, createContext } from 'react';
import { useState } from 'react'; 

const WeatherContext = createContext();
 
export const WeatherProvider = ({ children }) => {

  const [weather, setWeather] = useState([]);
 
  const [city, setCity] = useState(cities.find(item => item.id === 34));

  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  const value = {
    city,
    setCity,
    cities,
    days,
    weather,
    setWeather,
  };
  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);