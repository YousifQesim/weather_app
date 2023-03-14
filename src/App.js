
import React, { useState } from 'react';
import WeatherForm from '../src/components/WeatherForm';
import WeatherWeek from '../src/components/WeatherWeek';
import Weather from './components/Weather';
function App(props) {
  const [location, setLocation] = useState('');

  function handleFormSubmit(location) {
    setLocation(location);
  }

  return (
    <div className="w-auto mx-auto px-4 py-8 block border-2 border-red-700 ">
      <div className=' text-center flex justify-center border-2 border-cyan-700'>

    <WeatherForm onSubmit={handleFormSubmit} />
      </div>
    <div className='border-2 border-blue-700 flex'>

    {location && <WeatherWeek location={location} />}
    <Weather/>
    </div>
  </div>
  );
}

export default App;
