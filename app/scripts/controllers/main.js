'use strict';

/**
 * @ngdoc function
 * @name angularHnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHnApp
 */
angular.module('angularHnApp')
  .controller('MainCtrl', function ($rootScope, hackerNewsData) {
    hackerNewsData.getData();
    $rootScope.refresh = hackerNewsData.getData;
  });
