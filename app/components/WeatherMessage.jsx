const React = require('react');


const WeatherMessage = ({ location, temp }) => {
  return <h3>It's it {temp} in {location}.</h3>;
}

module.exports = WeatherMessage;