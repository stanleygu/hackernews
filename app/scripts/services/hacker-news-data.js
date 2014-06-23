'use strict';

angular.module('angularHnApp')
  .factory('hackerNewsData', function($http, placeHolder, localStorageService, $q, $log, $rootScope) {
    // Service logic
    // ...

    var getData = function() {
      $http.get('http://node-hnapi.herokuapp.com/news').success(function(data) {
        $rootScope.data = {
          frontPage: data,
          time: (new Date()).getTime(),
          items: {}
        };

        var fetchCommentsPromises = [];
        angular.forEach($rootScope.data.frontPage, function(item) {
          if (item.id) {
            var promise = $http.get('http://node-hnapi.herokuapp.com/item/' + item.id).success(function(data) {
              $rootScope.data.items[item.id] = data;
            });
            fetchCommentsPromises.push(promise);
          }
        });
        $q.all(fetchCommentsPromises).then(function() {
          localStorageService.set('data', $rootScope.data);
          $log.info('Saved to local storage', $rootScope.data);
        });
      })
        .error(function() {
          var data = localStorageService.get('data');
          if (data) {
            $rootScope.data = data.frontPage;
          } else {
            $rootScope.data = placeHolder.frontPage;
          }
        });
    };

    // Public API here
    return {
      getData: getData
    };
  });
