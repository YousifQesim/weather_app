


import React, { useState, useEffect } from 'react';
function Weather() {
  const [weather, setWeather] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [city, setCity] = useState('iraq');
const API_KEY = 'dc76ac242a0cf767b4420812cadf2440';
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric&q=iraq`;



  

  
  const fetchPhotoData = () => {
    fetch(`https://api.unsplash.com/search/photos/?query=${weather.name}&client_id=HM75VG5ZXMe_8wWJaSGT36IBBkt90e1XVjwQx7rFV-M`)
    
    .then(response => response.json())
    
    .then(data => setPhoto(data.results[0].urls.regular));
  }

  const fetchWeatherData = () => {
    fetch(API_URL.replace('city_name', 'Your City Name'))
      .then(response => response.json())
      .then(data => {
        const forecast = data.list;
        const days = {};
        forecast.forEach(forecastItem => {
          const date = new Date(forecastItem.dt * 1000);
          const day = date.toLocaleDateString('en-US', { weekday: 'long' });
          if (!days[day]) {
            days[day] = {
              temperature: forecastItem.main.temp,
              description: forecastItem.weather[0].description,
              icon: forecastItem.weather[0].icon,
            };
          }
        });
        setWeather(days);
      })
  };
    useEffect(() => {
      fetchWeatherData();
    }, []);
  
    useEffect(() => {
      if (weather) {
        fetchPhotoData();
      }
    }, [weather]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleButtonClick = () => {
    fetchWeatherData();
  };

  if (!weather || !photo) {
    return <div>Loading...</div>;
  }
  function myFunction(){
           handleButtonClick();
           setCity('');
    }


  return (
    <div className='flex'>
      {Object.keys(weather).map(day => (
        <div key={day}>
          <h2>{day}</h2>
          <p>{weather[day].temperature}°C</p>
          <p>{weather[day].description}</p>
          <img src={`http://openweathermap.org/img/w/${weather[day].icon}.png`} alt={weather[day].description} />
        </div>
      ))}
       <div className="mt-4 text-center">
 <input id="city" placeholder='search for a city:' className="mt-2 mr-6 p-2 w-96 border rounded-md  text-black" type="text"  value={city} onChange={handleCityChange} />
     <button className="mt-2 px-4 py-2 bg-white text-blue-500 rounded-md shadow-md hover:bg-blue-500 hover:text-white" onClick={myFunction}>Get Weather</button>
   </div>
    
       {/* <img className="mt-4 rounded-lg" src={photo} alt={weather.name} /> */}
    
    </div>
  );
}

export default Weather;
