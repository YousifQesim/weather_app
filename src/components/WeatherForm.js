import React, { useState } from 'react';

function WeatherForm(props) {
  const [location, setLocation] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(location);
  }

  function handleChange(event) {
    setLocation(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 mb-8">
    <label className="block font-medium mb-2">Enter location:</label>
    <input type="text" value={location} onChange={handleChange} className="w-full p-2 border rounded-md mb-4" />
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Submit</button>
  </form>
  );
}
export default WeatherForm;