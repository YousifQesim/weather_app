
import React, { useState } from 'react';
import WeatherForm from '../src/components/WeatherForm';
import WeatherWeek from '../src/components/WeatherWeek';

import Usecontext from './hooks/Usecontext';
function App(props) {
  const [location, setLocation] = useState('');

  function handleFormSubmit(location) {
    setLocation(location);
  }

  return (
    <Usecontext>

    <div className="w-auto mx-auto h-screen px-4 py-8 block lg:flex   ">
      <div className=' text-center flex justify-center '>

    <WeatherForm onSubmit={handleFormSubmit} />
      </div>
    <div className='w-auto flex items-center flex-wrap'>

    {location && <WeatherWeek location={location} />}

    </div>
  </div>
    </Usecontext>
  );
}

export default App;
