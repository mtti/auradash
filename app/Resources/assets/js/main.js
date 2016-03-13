
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var Dashboard = require('./components/dashboard/Dashboard.jsx');
var DashboardContainer = require('./components/dashboard/DashboardContainer.jsx');
//var Container = require('./container.js');

ReactDOM.render(
  <Dashboard />,
  document.getElementById('dashboard')
);

$(document).ready(function() {

  /*
  var root = new Container();
  root.width = 5;
  root.height = 3;
  root.layout = 'vertical';

  var child = new Container();
  child.width = 3;
  child.height = 2;
  root.addChild(child);

  child = new Container();
  child.width = 1;
  child.height = 1;
  root.addChild(child);

  var tile = new Container();
  tile.width = 2;
  tile.height = 1;
  tile.cssClasses = 'test-tile';
  child.addChild(tile);

  tile = new Container();
  tile.width = 1;
  tile.height = 1;
  tile.cssClasses = 'test-tile-2';
  child.addChild(tile);

  var options = {
    tileWidth: window.innerWidth / 5.0,
    tileHeight: window.innerWidth / 5.0
  };

  $('#dashboard').append(root.render(options));

  $('.test-tile').html('<div class="tile tile-red">hello</div>');
  $('.test-tile-2').html('<div class="tile tile-white">world</div>');
  */

  /*
  var tileWidth = window.innerWidth / 5.0;
  var tileHeight = window.innerHeight / 3.0;
  
  tileWidth = tileWidth - 30;
  tileHeight = tileHeight - 30;
  
  $('.tile').each(function(idx, elem) {

    $(elem)
      .css('width', tileWidth)
      .css('height', tileWidth);

  });
  */

});
