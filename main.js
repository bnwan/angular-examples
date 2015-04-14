'use strict';

var angular = require('angular');
var toolbar = require('./modules/toolbar');
var tradeBrowser = require('./modules/trade-browser');
var app = require('./app');

app.bootstrap(function () {
  var app = angular.module('app', [
        toolbar.name,
        tradeBrowser.name
      ]);

  require('./services');

  app.factory('TradeBrowserView', require('./views/trade-browser-window'));

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });
});
