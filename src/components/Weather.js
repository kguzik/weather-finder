import React from 'react';

const Weather = props => (
  <div>
    { props.city && props.country && <h2>Location: {props.city}, {props.country} </h2> }
    { props.temperature && <p>Temperature: {Math.round(props.temperature - 273.15)} &#8451;</p> }
    { props.humidity && <p>Humidity: {props.humidity} %</p> }
    { props.description && <p>Description: {props.description}</p> }
    { props.error && <p>{props.error}</p> }
  </div>
);

export default Weather; 
