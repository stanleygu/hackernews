'use strict';

/**
 * @ngdoc function
 * @name angularHnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHnApp
 */
angular.module('angularHnApp')
  .controller('MainCtrl', function(
    $scope,
    $rootScope,
    hackerNewsData,
    $cacheFactory,
    $anchorScroll,
    $location,
    $window,
    localStorageService
  ) {
    hackerNewsData.getData();
    $rootScope.refresh = hackerNewsData.getData;

    $scope.history = localStorageService.get('history') || {};

    var cache = $cacheFactory.get('scroll') || $cacheFactory('scroll');

    var previousItem = $location.hash(cache.get('item'));
    if (previousItem) {
      $anchorScroll();
      $window.scrollBy(0, -60);
    }

    $scope.setScrollItem = function(id) {
      cache.put('item', id);
      $scope.history[id] = true;
      localStorageService.set('history', $scope.history);
    };
  });
