import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Helmet from 'react-helmet';

const apiKey = "9e2f1c9dcba6b906904ed1c166a94535";

class App extends React.Component {
  state = {
    title: 'Basic information about weather | The weather finder',
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
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`);
    const data = await apiCall.json();
    if(city && country) {
      if(data.cod === "404") {
        this.setState({
          title: 'Basic information about weather | The weather finder',
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: 'City not found'
        });
      } else {
        this.setState({
          title: `Weather in ${data.name}, ${data.sys.country} | The weather finder`,
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
        title: 'Basic information about weather | The weather finder',
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
        <Helmet>
          <title>{this.state.title}</title>
          <meta name="description" content="Find the basic information about weather with The Weather Finder. Check temperature, humidity and weather description in your city &#9728;&#9729;" />
        </Helmet>
        <Header title="The weather finder"/>
        <Search getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        <Footer info="Designed & created by Karolina Guzik"/>
      </div>
    );
  }
}

export default App;
