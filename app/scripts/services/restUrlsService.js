'use strict';
angular.module('smartKidsApp').factory('restUrlsService', [function restUrlsServiceFactory() {

  /**
   * Must contain trailing slash in the end!
   */
  this.appPrefix = 'http://localhost:3000/';

  return {

    base: this.appPrefix,


    category: this.appPrefix + 'category/{categoryName}',

    items: this.appPrefix + 'items',

    tenant: this.appPrefix + 'items/{item_id}'


  };

}]);
