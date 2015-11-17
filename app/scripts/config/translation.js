'use strict';

angular
	.module('smartKidsApp')
	.config(['$translateProvider', function($translateProvider) {
		$translateProvider
			.registerAvailableLanguageKeys(
				['ru-RU', 'en-US'],
	            {
                  'ru*': 'ru-RU',
	                'en*': 'en-US',
	                '*': 'ru-RU'
            })
            .fallbackLanguage('ru-RU')
            .determinePreferredLanguage(function () {
                return 'ru-RU';
                //return window.navigator.userLanguage || window.navigator.language;
            });
	}]);
