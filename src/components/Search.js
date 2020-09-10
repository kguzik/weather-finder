import React from 'react';

const Search = props => (
  <form className="form" onSubmit={props.getWeather}>
    <input className="form__input" type="text" name="city" placeholder="city..."/>
    <input className="form__input" type="text" name="country" placeholder="country..."/>
    <button className="form__submit">Check weather</button>
  </form>
);

export default Search; 