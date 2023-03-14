import React, { useState,useEffect,useContext } from 'react';
import  { context } from '../hooks/Usecontext';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSun, faCloud, faCloudRain, faSnowflake, faBolt, faWind  } from '@fortawesome/free-solid-svg-icons'


function WeatherDay(props) {
  const {  weatherData,setWeatherData,location,setLocation} = useContext(context);
  const [temperature, setTemperature] = useState(null);
  const [unit, setUnit] = useState("Celsius");
  function getWeatherIcon(condition) {
    switch (condition.toLowerCase().split(" ").slice(1).join(" ")) {
  
      case 'clouds':
        return <FontAwesomeIcon icon={faCloud} className="text-gray-500 mr-2 text-5xl" />;
      case 'rain':
        return <FontAwesomeIcon icon={faCloudRain} className="text-blue-500 text-5xl" />;
      case 'snow':
        return <FontAwesomeIcon icon={faSnowflake} className="text-blue-500 text-5xl" />;
      case 'thunderstorm':
        return <FontAwesomeIcon icon={faBolt} className="text-yellow-500 text-5xl" />;
      case 'wind':
        return <FontAwesomeIcon icon={faWind} className="text-gray-500 text-5xl" />;
      default:
        return null;
    }
  }
  function getWeatherIcon2(condition) {
    switch (condition.toLowerCase().split(" ").slice(0).join(" ")) {
      case 'clear sky':
        return <FontAwesomeIcon icon={faSun} className="text-yellow-500 mr-2 text-5xl" />;
      default:
        return null;
    }
  }
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=dc76ac242a0cf767b4420812cadf2440&units=metric`;

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        const temperatureValue = response.data.main.temp;
        setTemperature(temperatureValue);
      })
      .catch(error => {
        // handle the error
      });
  }, []);

  function toggleUnit() {
    if (unit === "Celsius") {
      setUnit("Fahrenheit");
      setTemperature(temperature * 1.8 + 32);
    } else {
      setUnit("Celsius");
      setTemperature((temperature - 32) / 1.8);
    }
  }
  
  return (
    <div className="border rounded-md p-4 mb-4 mx-5 h-72 w-72 border-2  bg-white">
    <h2 className="font-medium mb-2">{props.day}</h2>
    <p className="text-gray-700 mb-1">
      Conditions: {props.conditions}
    </p>
    <p className="text-gray-700 mb-1 flex">
      Temperature:{temperature ? (
        <p>{temperature.toFixed(1)}°{unit}</p>
      ) : (
        <p>Loading...</p>
      )}
    </p>
    
      <button onClick={toggleUnit} className=' text-center block mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5'>
         Change to {unit === "Celsius" ? "Fahrenheit" : "Celsius"}
      </button>
    <div className='text-center '>
 
      {getWeatherIcon(props.conditions)}
      {getWeatherIcon2(props.conditions)}
    </div>
  </div>
  );
}
export default WeatherDay;