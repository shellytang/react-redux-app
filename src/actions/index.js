import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${__API_KEY__}`;


export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('request', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
