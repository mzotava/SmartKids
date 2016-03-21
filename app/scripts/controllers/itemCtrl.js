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

      $scope.rate = $scope.item.rate || 0;
      $scope.max = 5;
      $scope.isReadonly = false;

      $scope.saveRating = function(){
        $scope.isReadonly = true;
        $scope.item.rate = $scope.rate;

        categoryService.editItem($scope.itemId, $scope.item).success(function () { });

      };


    }]);

