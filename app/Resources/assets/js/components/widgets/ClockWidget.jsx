
var React = require('react');
var ReactDOM = require('react-dom');

var ClockWidget = React.createClass({

  tick: function() {
    var now = new Date();
    this.setState({
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      day: now.getDate(),
      month: now.getMonth(),
      year: now.getFullYear(),
      dayOfWeek: now.getDay()
    });
  },

  getInitialState: function() {
    var now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      day: now.getDate(),
      month: now.getMonth(),
      year: now.getFullYear(),
      dayOfWeek: now.getDay()
    };
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
    this.interval = null;
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  render: function() {

    var time = ('0'+this.state.hours).slice(-2)
      + ':' + ('0'+this.state.minutes).slice(-2)
      + ':' + ('0'+this.state.seconds).slice(-2);

    var date = this.state.year
      + '-' + ('0'+this.state.month).slice(-2)
      + '-' + ('0'+this.state.day).slice(-2);

    return (
      <div className="widget widget-black widget-clock">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <text fontSize="45px" x="50" y="40" textAnchor="middle">
            {time}
          </text>
          <text fontSize="15px" x="50" y="70" textAnchor="middle">
            {date}
          </text>
        </svg>
      </div>
    );

  }

});

module.exports = ClockWidget;

/*
*/