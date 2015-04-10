'use strict';
var React = require('react');
var appReact = require('./app-react.jsx');

module.exports = ['template', function ($compile, template) {

  return {
    template: template,
    link: function (scope, el, attrs) {
      React.render(React.createElement(appReact, {
        namesList: scope.namesList
      }), el[0]);
    }
  };
}];