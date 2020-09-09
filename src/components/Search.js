import React from 'react';

const Search = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="country" placeholder="country..."/>
    <input type="text" name="city" placeholder="city..."/>
    <button>Check weather</button>
  </form>
);

export default Search; 