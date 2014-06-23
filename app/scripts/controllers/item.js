'use strict';

/**
 * @ngdoc function
 * @name angularHnApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the angularHnApp
 */
angular.module('angularHnApp')
  .controller('ItemCtrl', function($scope, $routeParams, $http, $window) {
    $window.scrollTo(0, 0);
    $scope.item = $scope.data.items[$routeParams.id];
    if (!$scope.item) {
      $http.get('http://node-hnapi.herokuapp.com/item/' + $routeParams.id).success(function(data) {
        $scope.item = data;
      });
    }
  });
