'use strict';

/**
 * @ngdoc overview
 * @name smartKidsApp
 * @description
 * # smartKidsApp
 *
 * Main module of the application.
 */
angular
  .module('smartKidsApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
