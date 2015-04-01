var angular = require('angular');

module.exports = angular.module('DashboardApp.controllers', [])
  .constant('template', require('./names.html'))
  .directive('names', require('./app-directive'))
  .controller('dashboardController', ['$scope', function ($scope) {
    $scope.namesList = [
      'Benjamin',
      'Tony',
      'Mike'
    ];
  }]);