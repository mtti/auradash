
var React = require('react');

var DashboardContainer = require('./DashboardContainer.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      root: {
        direction: 'horizontal',
        width: 5,
        height: 3,
        children: [
          {
            direction: 'horizontal',
            width: 3,
            height: 0,
            children: []
          },
          {
            direction: 'vertical',
            width: 2,
            children: [
              {
                direction: 'horizontal',
                height: 1,
                children: []
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
