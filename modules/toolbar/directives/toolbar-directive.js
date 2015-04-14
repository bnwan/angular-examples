'use strict';

var template = require('./templates/toolbar.html');

module.exports = [function ($compile) {

  return {
    restrict: 'EA',
    template: template
  };
}];
