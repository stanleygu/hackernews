'use strict';

/**
 * @ngdoc function
 * @name angularHnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularHnApp
 */
angular.module('angularHnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
