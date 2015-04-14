'use strict';
var angular = require('angular');

module.exports = angular.module('tradeBrowser', [])
  .directive('fstTradeBrowser', require('./directives/trade-browser-directive'))
  .controller('tradeBrowserController', ['$scope', 'WindowService', function ($scope, windowService) {
    $scope.closeWindow = function () {

      var currentWindow = windowService.getCurrent();
      windowService.close(currentWindow);
    };
  }]);
