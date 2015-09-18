'use strict';

var isMessageStructure = function(message){
	return (('status' in message) &&
			('body' in message) && 
			('created_on' in message));
}

angular.module('githubStatusApp')
.controller('MessagesCtrl', function ($scope, $http) {
	$http.get('/github/last-message').
  then(function(response) {
	    $scope.messages = response.data instanceof Array ?
	    response.data : [response.data];

	    if ($scope.messages.length === 0) {
	    	$scope.error = 'No recent messages.';
	    }
	    else if (!isMessageStructure($scope.messages[0])) {
	    	$scope.error = 'Could not get github messages!';
	    }
  }, function(response) {
    $scope.error = 'Could not get github messages!';
  });
});