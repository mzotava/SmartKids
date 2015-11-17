'use strict';
/**
 * @ngdoc function
 * @name smartKidsApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the smartKidsApp
 */
angular.module('smartKidsApp')
  .controller('HeaderCtrl', ['$scope', '$location', '$anchorScroll', '$route',
    function ($scope, $location, $anchorScroll, $route) {
      console.log('headerCtrl init');


      $scope.toggleMenu = function () {
        var menu = angular.element("ul.menu:first");
        menu.slideToggle(function () {
          menu.css('overflow', 'visible');
          menu.toggleClass('menu-toggle-open');
        });
      };

      //$scope.goto = function ($event) {
      //
      //  $location.hash($event.toElement.hash);
      //  $anchorScroll();
      //  $event.preventDefault();
      //};

    }]);

