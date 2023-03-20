import React, { useState, useEffect,useContext} from 'react';
import WeatherDay from './WeatherDay';
import  { context } from '../hooks/Usecontext';



function WeatherWeek(props) {
  const {  weatherData,setWeatherData,location,setLocation} = useContext(context);

  useEffect(() => {
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=dc76ac242a0cf767b4420812cadf2440`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=dc76ac242a0cf767b4420812cadf2440&units=metric`;

    // const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=dc76ac242a0cf767b4420812cadf2440&units=metric`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
      console.log(data)
        const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
        const formattedData = dailyData.map(item => {
          return {
            day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
            temperature: item.main.temp,
            speed: item.wind.speed,
            conditions: item.weather[0].description,
            // speed: item.weather[0].wind.speed
          };  
        });  
        setWeatherData(formattedData);
      })  
      .catch(error => console.log(error));
  }, [props.location]);    


  

  return (
    <div>
      
    <div className='flex direc md:flex flex-wrap mt-10 justify-center mx-auto '>
      {weatherData.map((item, index) => {
        return (
          <WeatherDay
          key={index}
          day={item.day}
          temperature={item.temperature}
          conditions={item.conditions}
          speed={item.speed}
          />
          );
        })}
    </div>


      
        </div>
  );
}
export default WeatherWeek;