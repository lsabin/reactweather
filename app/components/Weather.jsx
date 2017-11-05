var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    // return {
    //   location: 'Miami',
    //   temp: 88,
    //   isLoading: false
    // }
    return {
      isLoading: false
    }
  },

  handleSearch: function (location) {
    // this.setState({
    //   location: location,
    //   temp: 23
    // }) -> Para test

    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (tempResult) {
      that.setState({
        location: location,
        temp: tempResult,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });

  },

  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching wather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
