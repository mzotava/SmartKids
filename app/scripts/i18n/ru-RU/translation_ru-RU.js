'use strict';

angular
  .module('smartKidsApp')
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('ru-RU', {
      art: 'Творчество',
      about: 'О нас',
      science: 'Науки',
      language: 'Языки',
      other: 'Другое',
      game: 'Игры'

    });
  }]);
