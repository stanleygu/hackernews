'use strict';

/**
 * @ngdoc overview
 * @name angularHnApp
 * @description
 * # angularHnApp
 *
 * Main module of the application.
 */
angular
  .module('angularHnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/item/:id', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
