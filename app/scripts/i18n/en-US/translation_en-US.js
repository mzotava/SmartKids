'use strict';

angular
	.module('smartKidsApp')
	.config(['$translateProvider', function($translateProvider) {
		$translateProvider.translations('en-US', {

            ART: 'Art'
		});
	}]);
