import React, { Component} from 'react';
import SearchBar from '../components/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}
