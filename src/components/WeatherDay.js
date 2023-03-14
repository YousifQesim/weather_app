import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSun, faCloud, faCloudRain, faSnowflake, faBolt, faWind  } from '@fortawesome/free-solid-svg-icons'


function WeatherDay(props) {
  function getWeatherIcon(condition) {
    switch (condition.toLowerCase().split(" ").slice(1).join(" ")) {
  
      case 'clouds':
        return <FontAwesomeIcon icon={faCloud} className="text-gray-500 mr-2" />;
      case 'rain':
        return <FontAwesomeIcon icon={faCloudRain} className="text-blue-500 mr-2" />;
      case 'snow':
        return <FontAwesomeIcon icon={faSnowflake} className="text-blue-500 mr-2" />;
      case 'thunderstorm':
        return <FontAwesomeIcon icon={faBolt} className="text-yellow-500 mr-2" />;
      case 'wind':
        return <FontAwesomeIcon icon={faWind} className="text-gray-500 mr-2" />;
      default:
        return null;
    }
  }
  function getWeatherIcon2(condition) {
    switch (condition.toLowerCase().split(" ").slice(0).join(" ")) {
      case 'clear sky':
        return <FontAwesomeIcon icon={faSun} className="text-yellow-500 mr-2" />;
      default:
        return null;
    }
  }
  
  return (
    <div className="border rounded-md p-4 mb-4">
    <h2 className="font-medium mb-2">{props.day}</h2>
    <p className="text-gray-700 mb-1">
      {getWeatherIcon(props.conditions)}
      {getWeatherIcon2(props.conditions)}
      Temperature: {props.temperature} degrees Celsius
    </p>
    <p className="text-gray-700 mb-1">
      {getWeatherIcon(props.conditions)}
      Conditions: {props.conditions}
    </p>
  </div>
  );
}
export default WeatherDay;