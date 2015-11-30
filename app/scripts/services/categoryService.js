'use strict';
angular.module('smartKidsApp').factory('categoryService', ['$http', 'restUrlsService', function categoryServiceFactory($http, restUrlsService) {
    return{


        // get category items
        getCategoryItems: function(categoryName){
            return $http.get(restUrlsService.category.replace('{categoryName}', categoryName));
        },

      // add  item
      addItem: function(item){
        return $http.post(restUrlsService.items, item);
      },

        // edit item
      editItem: function(itemId, item){
            return $http.put(restUrlsService.item.replace('{item_id}', itemId), item);
        }
      //
      //  // delete  item
      //  deleteItem: function(itemId){
      //      return $http.delete(restUrlsService.item.replace('{item_id}', itemId));
      //  },
      //
    };
}]);
