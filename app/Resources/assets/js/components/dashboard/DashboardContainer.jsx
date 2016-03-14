
var React = require('react');

var DashboardContainer = React.createClass({

  render: function() {

    var self = this;
    var offset = { x:0, y:0 };

    if (!self.props.layout.offset) self.props.layout.offset = {x:0, y:0};

    var createChild = function(item, i) {

      if (!item.direction) item.direction = 'horizontal';
      if (!item.children) item.children = [];
      if (!item.width) item.width = 0;
      if (!item.height) item.height = 0;

      var tree = self.props.tree + '-' + i;
      item.offset = { x:offset.x, y:offset.y };

      /*
      Children of horizontal containers always have height equal to the parent
      and children of vertical containers have width equal to the parent
      */
      if (self.props.layout.direction == 'horizontal') {
        item.height = self.props.layout.height;
        offset.x += item.width;
      }
      else if (self.props.layout.direction == 'vertical') {
        item.width = self.props.layout.width;
        offset.y += item.height;
      }

      return <DashboardContainer key={tree} tree={tree} layout={item} />
    }

    var styles = {
      position: 'absolute',
      width: self.props.layout.width * 300,
      height: self.props.layout.height * 300,
      left: self.props.layout.offset.x * 300,
      top: self.props.layout.offset.y * 300
    };

    if (this.props.layout.children.length == 0) {
      styles.padding = '10px 0 0 10px';
      styles.boxSizing = 'border-box';

      if (this.props.layout.widget) {
        return (
          <div style={styles}>
            <this.props.layout.widget />
          </div>
        );
      }
      else {
        return (
          <div style={styles}>
            <div className="widget widget-black"></div>
          </div>
        );
      }

    }

    return (
      <div style={styles}>
        {this.props.layout.children.map(createChild)}
      </div>
    );

    //return <div>container {this.props.tree}</div>;

  }
});

module.exports = DashboardContainer;
