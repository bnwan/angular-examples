'use strict';
var angular = require('angular');

require('./style.less');

module.exports = angular.module('toolbar', [])
  .directive('fstToolbar', require('./directives/toolbar-directive'))
  .controller('toolbarController', ['$scope', 'WindowService', 'TradeBrowserView', function ($scope, windowService, tradeBrowserView) {
    $scope.launchTradeBrowser = function () {
      windowService.open(tradeBrowserView);
    };
  }]);
