const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=fa4c138aa27281a46e4016ffd2b6a966';


module.exports = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location)
    let reqUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation},id`;

    return axios.get(reqUrl)
      .then((res) => {
        if (res.data.cod && res.data.message) {
          throw new Error('Unable to fetch weather for that location.');
        } else {
          return res.data.main.temp;
        }
      }, (e) => {
        throw new Error('Unable to fetch weather for that location.');
      });
  }
}