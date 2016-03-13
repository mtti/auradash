
var $ = require('jquery');

var Container = function() {

  // horizontal = always full height of parent
  // vertical = always full width of parent

  this.layout = 'horizontal';
  this.width = 0;
  this.height = 0;
  this.offset = { x:0, y: 0};
  this.parent = null;
  this.children = [];
  this.cssClasses = null;

}

Container.prototype.getWidth = function() {
  if (this.parent != null && this.parent.layout == 'vertical') {
    return this.parent.getWidth();
  }
  return this.width;
}

Container.prototype.getHeight = function() {
  if (this.parent != null && this.parent.layout == 'horizontal') {
    return this.parent.getHeight();
  }
  return this.height;
}

Container.prototype.getPosition = function(options) {
  return {
    left: this.offset.x * options.tileWidth,
    top: this.offset.y * options.tileHeight
  }
}

Container.prototype.addChild = function(child) {

  var offset = { x: 0, y: 0 };
  for (var i=0; i<this.children.length; i++) {
    if (this.layout == 'horizontal') {
      offset.x += this.children[i].getWidth();
    }
    else if (this.layout == 'vertical') {
      offset.y += this.children[i].getHeight();
    }
  }

  if (this.layout == 'horizontal') {
    if ( (this.getWidth() - offset.x) < 0) {
      console.error('Not enough space to add child');
      console.error(this);
      return;
    }
  }
  else if (this.layout == 'vertical') {
    if ( (this.getHeight() - offset.x) < 0) {
      console.error('Not enough space to add child');
      console.error(this);
      return;
    }

  }

  child.parent = this;
  child.offset = offset;

  this.children.push(child);
}

Container.prototype.render = function(options) {

  if (!options) options = {};
  if (!options.tileHeight) options.tileHeight = 300;
  if (!options.tileWidth) options.tileWidth = 300;
  
  function getRandColor(brightness){
    //6 levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
    return "rgb(" + mixedrgb.join(",") + ")";
  }


  var elem = document.createElement('div');
  elem = $(elem);
  
  var pos = this.getPosition(options);

  elem.css('position', 'absolute');
  elem.css('top', pos.top);
  elem.css('left', pos.left);

  elem.css('width', this.getWidth() * options.tileWidth);
  elem.css('height', this.getHeight() * options.tileHeight);

  if (this.cssClasses) {
    elem.addClass(this.cssClasses);
  }

  for (var i=0; i<this.children.length; i++) {
    elem.append(this.children[i].render(options));
  }

  return elem;

}

module.exports = Container;
