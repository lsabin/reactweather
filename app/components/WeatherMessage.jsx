var React = require('react');

// 1a version
// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//
//     return (
//       <h3>It's {temp} in {location}.</h3>
//     )
//   }
// });

// 2a version
// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//
//   return (
//     <h3>It's {temp} in {location}.</h3>
//   )
// }

// 3a version
var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's {temp} in {location}.</h3>
  )
}

module.exports = WeatherMessage;
