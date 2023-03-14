// import React from 'react';
// import Weather from '../src/components/Weather';

// const App = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Weather />
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import WeatherForm from '../src/components/WeatherForm';
import WeatherWeek from '../src/components/WeatherWeek';

function App() {
  const [location, setLocation] = useState('');

  function handleFormSubmit(location) {
    setLocation(location);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
    <WeatherForm onSubmit={handleFormSubmit} />
    {location && <WeatherWeek location={location} />}
  </div>
  );
}

export default App;
