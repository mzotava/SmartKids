'use strict';

/**
 * @ngdoc function
 * @name smartKidsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartKidsApp
 */
angular.module('smartKidsApp')
  .controller('MainCtrl', ['$scope', '$rootScope', '$location',
    function ($scope, $rootScope, $location) {


      $scope.awesomeThings = [
        {
          "name": "first mock"
        },
        {
          "name": "second mock"
        },
        {
          "name": "third mock"
        }
      ]

    }]);
