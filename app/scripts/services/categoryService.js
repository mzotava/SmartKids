'use strict';
angular.module('smartKidsApp').factory('categoryService', ['$http', 'restUrlsService', function categoryServiceFactory($http, restUrlsService) {
    return{


        // get category items
        getCategoryItems: function(categoryName){
            return $http.get(restUrlsService.category.replace('{categoryName}', categoryName));
        }

      //// add profile item
      //addProfile: function(id, profile){
      //  return $http.post(restUrlsService.profiles.replace('{id}', id), profile);
      //},
      //// activate|deactivate profile
      //activateProfile: function(profileId, activeKey){
      //  return $http.put(restUrlsService.profileActivate.replace('{profile_id}', profileId).replace('{active_key}', activeKey));
      //},
      //
      //  // edit profile item
      //  editProfile: function(id, profileId, profile){
      //      return $http.put(restUrlsService.profile.replace('{id}', id).replace('{profile_id}', profileId), profile);
      //  },
      //
      //  // delete profile item
      //  deleteProfile: function(profileId){
      //      return $http.delete(restUrlsService.profile.replace('{profile_id}', profileId));
      //  },
      //
      //  // get profiles list
      //  getProfiles: function (id) {
      //      return $http.get(restUrlsService.profiles.replace('{id}', id));
      //
      //  }
    };
}]);
