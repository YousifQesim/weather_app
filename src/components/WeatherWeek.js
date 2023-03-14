import React, { useState, useEffect,useContext} from 'react';
import WeatherDay from './WeatherDay';
import  { context } from '../hooks/Usecontext';



function WeatherWeek(props) {
  const {  weatherData,setWeatherData,location,setLocation} = useContext(context);

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=dc76ac242a0cf767b4420812cadf2440&units=metric`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
        const formattedData = dailyData.map(item => {
          return {
            day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
            temperature: item.main.temp,
            conditions: item.weather[0].description
          };  
        });  
        setWeatherData(formattedData);
      })  
      .catch(error => console.log(error));
  }, [props.location]);    


  

  return (
    <div>
      
    <div className='block xl:flex'>
      {weatherData.map((item, index) => {
        return (
          <WeatherDay
          key={index}
          day={item.day}
          temperature={item.temperature}
          conditions={item.conditions}
          />
          );
        })}
    </div>


      
        </div>
  );
}
export default WeatherWeek;