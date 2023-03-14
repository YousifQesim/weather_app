
import React, { useState } from 'react';
import WeatherForm from '../src/components/WeatherForm';
import WeatherWeek from '../src/components/WeatherWeek';
import Weather from './components/Weather';
import Usecontext from './hooks/Usecontext';
function App(props) {
  const [location, setLocation] = useState('');

  function handleFormSubmit(location) {
    setLocation(location);
  }

  return (
    <Usecontext>

    <div className="w-auto mx-auto h-screen px-4 py-8 block lg:flex border-2 border-red-700  ">
      <div className=' text-center flex justify-center border-2 border-cyan-700'>

    <WeatherForm onSubmit={handleFormSubmit} />
      </div>
    <div className='border-2 w-auto border-blue-700 flex items-center flex-wrap'>

    {location && <WeatherWeek location={location} />}
    <Weather/>
    </div>
  </div>
    </Usecontext>
  );
}

export default App;
