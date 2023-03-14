import React, { createContext, useState, useEffect } from "react";
export const context = createContext(null);
const Usecontext = (props) => {
  const [weatherData, setWeatherData] = useState([]);
  const [location, setLocation] = useState('');

  
  const values = {
    weatherData,setWeatherData,location,setLocation
  };
  return <context.Provider value={values}>{props.children}</context.Provider>;
};

export default Usecontext;
