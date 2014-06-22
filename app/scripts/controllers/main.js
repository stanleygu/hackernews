'use strict';

/**
 * @ngdoc function
 * @name angularHnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHnApp
 */
angular.module('angularHnApp')
  .controller('MainCtrl', function ($scope, $http, placeHolder, localStorageService, $q, $log, $rootScope) {
    $http.get('http://node-hnapi.herokuapp.com/news').success(function(data) {
      $scope.data = {
        frontPage: data,
        time: (new Date()).getTime(),
        items: {}
      };

      var fetchCommentsPromises = [];
      angular.forEach($scope.data.frontPage, function(item) {
        if(item.id) {
          var promise = $http.get('http://node-hnapi.herokuapp.com/item/' + item.id).success(function(data) {
            $scope.data.items[item.id] = data;
          });
          fetchCommentsPromises.push(promise);
        }
      });
      $q.all(fetchCommentsPromises).then(function() {
        localStorageService.set('data', $scope.data);
        $rootScope.data = $scope.data;
        $log.info('Saved to local storage', $scope.data);
      });
    })
    .error(function() {
      var data = localStorageService.get('data');
      if (data) {
        $scope.data = data.frontPage;
      } else {
        $scope.data = placeHolder.frontPage;
      }
    });
  });
