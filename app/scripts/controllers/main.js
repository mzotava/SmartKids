'use strict';

/**
 * @ngdoc function
 * @name smartKidsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartKidsApp
 */
angular.module('smartKidsApp')
  .controller('MainCtrl', ['$scope', 'categoryService',
    function ($scope, categoryService) {
      var blockHeight =  angular.element(".block").height();
      var containerHeight =  angular.element(".stickers.container").height();
      var blockAmount = angular.element(".block").length;
      if(containerHeight > blockAmount*blockHeight){
        angular.element(".stickers").height(blockAmount*blockHeight);
      }

      categoryService.getCategoryItems('art').success(function (data) {
        $scope.arts = data;
      });

      categoryService.getCategoryItems('science').success(function (data) {
        $scope.sciences = data;
      });

      categoryService.getCategoryItems('language').success(function (data) {
        $scope.languages = data;
      });

      categoryService.getCategoryItems('game').success(function (data) {
        $scope.games = data;
      });



    }]);
