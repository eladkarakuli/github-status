'use strict';

describe('Controller: StatusCtrl', function () {

  // load the controller's module
  beforeEach(module('githubStatusApp'));

  var StatusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatusCtrl = $controller('StatusCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a status variable to the scope', function () {
  });

  it('should set status to "Good" on response', function () {
  });

  it('should set status to "GitHub is not available!" when no response', function () {
  });

  it('should set status to "GitHub is not available!" on response, but corrupted format.', function () {
  });
});
