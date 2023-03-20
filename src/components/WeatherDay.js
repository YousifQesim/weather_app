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
        return <FontAwesomeIcon icon={faCloud} className="text-gray-500 mr-2 text-6xl" />;
      case 'rain':
        return <FontAwesomeIcon icon={faCloudRain} className="text-blue-500 text-6xl" />;
      case 'snow':
        return <FontAwesomeIcon icon={faSnowflake} className="text-blue-500 text-6xl" />;
      case 'thunderstorm':
        return <FontAwesomeIcon icon={faBolt} className="text-yellow-500 text-6xl" />;
      case 'wind':
        return <FontAwesomeIcon icon={faWind} className="text-gray-500 text-6xl" />;
      default:
        return null;
    }
  }
  function getWeatherIcon2(condition) {
    switch (condition.toLowerCase().split(" ").slice(0).join(" ")) {
      case 'clear sky':
        return <FontAwesomeIcon icon={faSun} className="text-yellow-500 mr-2 text-6xl" />;
      default:
        return null;
    }
  }

  return (
    <div className="border rounded-md p-4 mb-4 mx-5 h-72 w-72 border-2  bg-white">
    <h2 className="font-medium mb-2">{props.day}</h2>
    <p className="text-gray-700 mb-3">
      Conditions: {props.conditions}
    </p>
    <p className="text-gray-700 mb-3 flex">
      Temperature:
    {props.temperature}
    </p>
    <p className="text-gray-700 mb-3">
      WindSpeed: {props.speed}Km/h
    </p>
    
    <div className='text-center relative top-8 '>
 
      {getWeatherIcon(props.conditions)}
      {getWeatherIcon2(props.conditions)}
    </div>
  </div>
  );
}
export default WeatherDay;