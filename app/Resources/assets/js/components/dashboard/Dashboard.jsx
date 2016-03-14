
var React = require('react');

var DashboardContainer = require('./DashboardContainer.jsx');
var ClockWidget = require('../widgets/ClockWidget.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      root: {
        direction: 'vertical',
        width: 5,
        height: 3,
        children: [
          {
            direction: 'horizontal',
            width: 0,
            height: 1,
            children: [
              { width: 2, widget: ClockWidget },
              { width: 1 },
              { width: 1 },
              { width: 1 }
            ]
          },
          {
            direction: 'horizontal',
            width: 0,
            height: 2,
            children: [
              {
                width: 1
              },
              {
                direction: 'vertical',
                width: 2,
                children: [
                  {
                    height: 1,
                    children: [ { width: 1 }, { width: 1} ]
                  },
                  {
                    height: 1
                  }
                ]
              },
              {
                width: 2
              }
            ]
          }
        ]
      }
    };
  },

  render: function() {
    return (
      <DashboardContainer key="root" tree="root" layout={this.state.root} />
    );
  }

});
