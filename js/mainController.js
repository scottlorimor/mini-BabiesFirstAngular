var app = angular.module('friendsList');

app.controller('mainController', function($scope) {
	$scope.name = "Scott";
	$scope.friends = ['tim', 'tom', 'tony'];

	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
		console.log("adding new friend...")
		$scope.friends.forEach(function(name) {
			console.log(name);
		})
	}
});