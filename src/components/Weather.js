import React from 'react';

const Weather = props => (
  <div className={props.city && props.country ? "results results--grey" : "results"}>
    { props.city && props.country && <h2>{props.city}, {props.country} </h2> }
    { props.description && <p className="results__data">{props.description}</p> }
    { props.temperature && <p className="results__data">Temperature: <strong>{Math.round(props.temperature - 273.15)} &#8451;</strong></p> }
    { props.humidity && <p className="results__data">Humidity: <strong>{props.humidity} %</strong></p> }
    { props.error && <p className="results__error">{props.error}</p> }
  </div>
);

export default Weather; 
