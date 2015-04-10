'use strict';
var appMain = require('../app-main');

require('./style.less');

var toolbar = appMain.constant('template', require('./names.html'))
  .directive('toolbar', require('./toolbar-directive'))
  .controller('toolbarController', ['$scope', function ($scope) {
    $scope.namesList = [
      '1',
      '2',
      '3'
    ];
  }]);

module.exports = toolbar;
