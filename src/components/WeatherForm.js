import React, { useState,useEffect } from 'react';

function WeatherForm(props) {
  const [location, setLocation] = useState('');
  const API_KEY = 'dc76ac242a0cf767b4420812cadf2440';
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric&q=iraq`;
  const [photo, setPhoto] = useState(null);
  
  const fetchPhotoData = () => {
    fetch(`https://api.unsplash.com/search/photos/?query=${props.location}&client_id=HM75VG5ZXMe_8wWJaSGT36IBBkt90e1XVjwQx7rFV-M`)
    
    .then(response => response.json())
    
    .then(data => setPhoto(data.results[0].urls.small));
  }

  
    useEffect(() => {
    
        fetchPhotoData();
      
    }, [props.location]);

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(location);
  }

  function handleChange(event) {
    setLocation(event.target.value);
  }

  return (
    <div>

    <form onSubmit={handleSubmit} className="mt-4 mb-8">
    <label className="block font-medium mb-2">Enter location:</label>
    <input type="text" value={location} onChange={handleChange} className="w-full p-2 border rounded-md mb-4" />
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Submit</button>
  </form>
  <img className="mt-4 rounded-lg" src={photo} alt={props.name} />

    </div>
  );
}
export default WeatherForm;