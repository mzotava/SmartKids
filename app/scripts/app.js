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
    'ngSanitize',
    'pascalprecht.translate',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/category/:categoryName', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/item', {
        templateUrl: 'views/newItem.html',
        controller: 'crudItemCtrl',
        controllerAs: 'crudItemCtrl'
      })

      .when('/item/:itemId', {
        templateUrl: 'views/item.html',
        controller: 'itemCtrl',
        controllerAs: 'itemCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
