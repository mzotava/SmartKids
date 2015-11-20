'use strict';
angular.module('smartKidsApp').factory('restUrlsService', [ function restUrlsServiceFactory() {

    /**
     * Must contain trailing slash in the end!
     */
    this.appPrefix = 'http://localhost:3000/';

    return {

        base: this.appPrefix,

        /**
         * method GET, return JSON
         */
        category: this.appPrefix + 'category/{categoryName}'

        ///**
        // * method GET, return JSON
        // */
        //tenants: this.appPrefix + 'tenants',
        //
        ///**
        // * method PUT, return JSON
        // */
        //tenantActivate: this.appPrefix + 'tenants/{tenant_id}/active?active={active_key}',
        //
        ///**
        // * method PUT, return JSON
        // */
        //tenantSetDefault: this.appPrefix + 'tenants/{tenant_id}/default-version?versionId={version_id}',
        //
        ///**
        // * method GET, return JSON
        // */
        //profiles: this.appPrefix + 'tenants/{id}/profiles',
        //
        ///**
        // * method POST, return JSON
        // */
        //saveProfiles: this.appPrefix + 'profiles',
        //
        ///**
        // * method GET, return JSON
        // */
        //profile: this.appPrefix + 'profiles/{profile_id}',
        //
        ///**
        // * method PUT, return JSON
        // */

    };

}]);
