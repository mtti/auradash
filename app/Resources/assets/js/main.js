
var $ = require('jquery');
var Container = require('./container.js');

$(document).ready(function() {

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
  child.cssClasses = 'tile-red';
  root.addChild(child);

  var options = {
    tileWidth: window.innerWidth / 5.0,
    tileHeight: window.innerWidth / 5.0
  };
  
  $('#dashboard').append(root.render(options));


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
