'use strict';

/**
 * @ngdoc overview
 * @name gameTestApp
 * @description
 * # gameTestApp
 *
 * Main module of the application.
 */
angular
  .module('gameTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      // .otherwise({
      //   redirectTo: '/'
      // });
  });
