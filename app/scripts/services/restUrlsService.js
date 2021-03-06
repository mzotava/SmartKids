'use strict';
angular.module('smartKidsApp').factory('restUrlsService', [function restUrlsServiceFactory() {

  /**
   * Must contain trailing slash in the end!
   */
  this.appPrefix = 'http://192.168.8.7:3000/';

  return {

    base: this.appPrefix,


    category: this.appPrefix + 'category/{categoryName}',

    items: this.appPrefix + 'items',

    item: this.appPrefix + 'items/{item_id}'


  };

}]);
