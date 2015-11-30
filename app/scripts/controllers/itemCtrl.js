'use strict';
/**
 * @ngdoc function
 * @name smartKidsApp.controller:itemCtrl
 * @description
 * # itemCtrl
 * Controller of the smartKidsApp
 */
angular.module('smartKidsApp')
  .controller('itemCtrl', ['$scope', '$location', '$route', 'categoryService',
    function ($scope, $location, $route, categoryService) {
      console.log('itemCtrl init');

      $scope.itemId = $route.current.params.itemId || null;

      categoryService.getItem($scope.itemId).success(function (data) {
        $scope.item = data.item;
      });

    }]);

