'use strict';
angular.module('smartKidsApp').factory('categoryService', ['$http', 'restUrlsService', function categoryServiceFactory($http, restUrlsService) {
  return {

    getCategoryItems: function (categoryName) {
      return $http.get(restUrlsService.category.replace('{categoryName}', categoryName));
    },

    addItem: function (item) {
      return $http.post(restUrlsService.items, item);
    },

    editItem: function (itemId, item) {
      return $http.put(restUrlsService.item.replace('{item_id}', itemId), item);
    },

    getItem: function (itemId) {
      return $http.get(restUrlsService.item.replace('{item_id}', itemId));
    },

    deleteItem: function (itemId) {
      return $http.delete(restUrlsService.item.replace('{item_id}', itemId));
    }

  };
}]);
