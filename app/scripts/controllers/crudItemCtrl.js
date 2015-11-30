'use strict';
/**
 * @ngdoc function
 * @name smartKidsApp.controller:crudItemCtrl
 * @description
 * # crudItemCtrl
 * Controller of the smartKidsApp
 */
angular.module('smartKidsApp')
  .controller('crudItemCtrl', ['$scope', '$location', '$route', 'categoryService',
    function ($scope, $location, $route, categoryService) {
      console.log('crudItemCtrl init');

      $scope.itemId = $route.current.params.itemId || null;
      $scope.categories = [
        {
          id: 'art',
          name: 'Творчество'
        },
        {
          id: 'science',
          name: 'Наука'
        },
        {
          id: 'language',
          name: 'Языки'
        },
        {
          id: 'game',
          name: 'Игры'
        },
        {
          id: 'other',
          name: 'Другое'
        }
      ];

      $scope.colors = [
        {
          id: 'blue',
          name: 'Голубой'
        },
        {
          id: 'green',
          name: 'Зеленый'
        },
        {
          id: 'purple',
          name: 'Фиолетовый'
        },
        {
          id: 'red',
          name: 'Красный'
        },
        {
          id: 'yellow',
          name: 'Желтый'
        }
      ];

      $scope.saveItem = function(){
        var crudItem = {
          categoryName: $scope.item.category.id,
          color: $scope.item.color.id,
          image: $scope.item.image,
          header: $scope.item.header,
          description: $scope.item.description,
          content: $scope.item.content
        };

        if ($scope.itemId) {
          categoryService.editItem($scope.itemId, crudItem).success(function () {
            $location.path('/');
          })
        }
        else {
          categoryService.addItem(crudItem).success(function () {
            $location.path('/');
          })
        }
      };


    }]);

