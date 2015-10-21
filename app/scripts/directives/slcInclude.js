'use strict';
angular.module('smartKidsApp').directive('slcInclude', function () {
    return {
        replace: true,
        restrict: 'A',
        templateUrl: function (iElement, iAttrs) {
            if (!iAttrs.slcInclude){
                throw new Error('slc-replace: template url must be provided');
            }
            return iAttrs.slcInclude;
        }
    };
});
