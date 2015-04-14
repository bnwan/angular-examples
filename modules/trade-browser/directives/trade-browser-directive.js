'use strict';

var template = require('./templates/trade-browser.html');

module.exports = [function ($compile) {

  return {
    restrict: 'EA',
    template: template
  };
}];
