'use strict';

describe('Controller: MessagesCtrl', function () {

  // load the controller's module
  beforeEach(module('githubStatusApp'));

  var MessagesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessagesCtrl = $controller('MessagesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should set messages to an array with object "status", "body" and 
  	created_on, on response of messages array', function () {
  });

  it('should set messages to an array with object "status", "body" and 
  	"created_on", on response of a single object', function () {
  });

  it('should set error to "No recent messages.", on response of messages with empty array', function () {
  });  

  it('should set error to "Could not get github messages!", on bad response', function () {
  });

  it('should set error to "Could not get github messages!", on fail response', function () {
  });
});
