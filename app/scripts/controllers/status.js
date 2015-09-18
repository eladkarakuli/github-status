'use strict';

angular.module('githubStatusApp')
.controller('StatusCtrl', function ($scope, $http) {
	var error = "GitHub is not available!";

	$http.get('/github/status').
	then(function(response) {
		$scope.status = response.data.status || error;
	}, function(response) {
		$scope.status = error;
	});
});