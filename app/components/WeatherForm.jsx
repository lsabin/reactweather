var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();  // hace que no se refresque la página al hacer submit

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';

      this.props.onSearch(location);
    }
  },

  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" />
          <button>Get weather for location</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
