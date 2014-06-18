'use strict';

/**
 * @ngdoc function
 * @name angularHnApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the angularHnApp
 */
angular.module('angularHnApp')
  .controller('ItemCtrl', function ($scope, $routeParams, $http) {

    $http.get('http://node-hnapi.herokuapp.com/item/' + $routeParams.id).success(function(data) {
      $scope.item = data;
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
