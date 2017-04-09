const React = require('react');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');

const Weather = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
})

module.exports = Weather;