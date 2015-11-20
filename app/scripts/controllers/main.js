'use strict';

/**
 * @ngdoc function
 * @name smartKidsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartKidsApp
 */
angular.module('smartKidsApp')
  .controller('MainCtrl', ['$scope',
    function ($scope) {
      var blockHeight =  angular.element(".block").height();
      var containerHeight =  angular.element(".stickers.container").height();
      var blockAmount = angular.element(".block").length;
      if(containerHeight > blockAmount*blockHeight){
        angular.element(".stickers").height(blockAmount*blockHeight);
      }


      $scope.arts = [
        {
          'id': 1,
          'class': 'blue',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 2,
          'class': 'yellow',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 3,
          'class': 'green',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        },
        {
          'id': 4,
          'class': 'purple',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 5,
          'class': 'block red',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art4.jpg'
        },
        {
          'id': 6,
          'class': 'block purple',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        },
        {
          'id': 7,
          'class': 'block blue',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art8.jpg'
        },
        {
          'id': 8,
          'class': 'block yellow',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art7.jpg'
        },
        {
          'id': 9,
          'class': 'block green',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        }
      ];

      $scope.sciences = [
        {
          'id': 1,
          'class': 'block blue',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 2,
          'class': 'block yellow',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 3,
          'class': 'block green',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        },
        {
          'id': 4,
          'class': 'block purple',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 5,
          'class': 'block red',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art4.jpg'
        },
        {
          'id': 6,
          'class': 'block purple',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        },
        {
          'id': 7,
          'class': 'block blue',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art8.jpg'
        },
        {
          'id': 8,
          'class': 'block yellow',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art7.jpg'
        },
        {
          'id': 9,
          'class': 'block green',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        }
      ];


      $scope.languages = [
        {
          'id': 1,
          'class': 'block blue',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 2,
          'class': 'block yellow',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 3,
          'class': 'block green',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        },
        {
          'id': 4,
          'class': 'block purple',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 5,
          'class': 'block red',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art4.jpg'
        },
        {
          'id': 6,
          'class': 'block purple',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        },
        {
          'id': 7,
          'class': 'block blue',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art8.jpg'
        },
        {
          'id': 8,
          'class': 'block yellow',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art7.jpg'
        },
        {
          'id': 9,
          'class': 'block green',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        }
      ];

      $scope.games = [
        {
          'id': 1,
          'class': 'block blue',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 2,
          'class': 'block yellow',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 3,
          'class': 'block green',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        },
        {
          'id': 4,
          'class': 'block purple',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art1.jpg'
        },
        {
          'id': 5,
          'class': 'block red',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art4.jpg'
        },
        {
          'id': 6,
          'class': 'block purple',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        },
        {
          'id': 7,
          'class': 'block blue',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art8.jpg'
        },
        {
          'id': 8,
          'class': 'block yellow',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art7.jpg'
        },
        {
          'id': 9,
          'class': 'block green',
          'header': 'Header1',
          'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'image': 'img/art2.jpg'
        }
      ];

    }]);
