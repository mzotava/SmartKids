angular.module('smartKidsApp')
	.config(function($provide) {
	    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
	})
	.run(function($httpBackend, MockServer) {
		// Let requests for known static content pass through
	    $httpBackend.whenGET(/templates\//).passThrough();
	    $httpBackend.whenGET(/images\//).passThrough();
	    $httpBackend.whenGET(/views\//).passThrough();
	    $httpBackend.whenGET(/styles\//).passThrough();

	    // Pass requests on to mock server for GET http://localhost:8080/
	    $httpBackend.whenGET(/^http:\/\/localhost(:\d+)?\/?$/).respond(function(method, url, data) {
	        return MockServer.getStatus();
	    });
    $httpBackend.whenGET(/^http:\/\/localhost(:\d+)?\/(category)\/(.*)/).respond(function(method, url, data) {
      return MockServer.getCategoryItems();
    });
});
