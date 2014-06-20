'use strict';

/**
 * @ngdoc function
 * @name angularHnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHnApp
 */
angular.module('angularHnApp')
  .controller('MainCtrl', function ($scope, $http, placeHolder) {
    $http.get('http://node-hnapi.herokuapp.com/news').success(function(data) {
      $scope.data = data;
    })
    .error(function() {
      $scope.data = placeHolder.frontPage;
    });
  });
