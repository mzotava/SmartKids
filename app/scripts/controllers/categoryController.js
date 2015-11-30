'use strict';
/**
 * @ngdoc function
 * @name smartKidsApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the smartKidsApp
 */
angular.module('smartKidsApp')
  .controller('CategoryCtrl', ['$scope', '$location', '$route', 'categoryService',
    function ($scope, $location, $route, categoryService) {
      console.log('CategoryCtrl init');

      $scope.categoryName = $route.current.params.categoryName || null;

      categoryService.getCategoryItems($scope.categoryName).success(function (data) {
          $scope.categoryItems = data;
        });

      $scope.selectItem = function(id){
        $location.path('/item/' + id);
      }

    }]);

