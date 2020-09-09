import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Weather from './components/Weather';

const apiKey = "9e2f1c9dcba6b906904ed1c166a94535";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const apiCall = await fetch(` http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`);
    const data = await apiCall.json();
    if(city && country) {
      console.log(data);
      if(data.cod === "404") {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: 'City not found'
        });
      } else {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: undefined
        }); 
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please fill out fields'
      });
    }
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Search getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
