	var angularAlbum = angular.module('angularAlbum', ['ngRoute']);

	angularAlbum.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'templates/albums.html',
				controller  : 'AlbumsController'
			})
	});

	// create the controller and inject Angular's $scope
	angularAlbum.controller('AlbumsController', function($scope, $rootScope,$http) {
		// create a message to display in our view
		var url = 'https://jsonplaceholder.typicode.com/photos';
		$scope.albums = [];
		
		$http.get(url).then(successCallback, errorCallback);

		function successCallback(response){
			$scope.albums = response.data;
		}
		function errorCallback(error){
			$scope.error = 'Error fetching data';
		}

		$scope.backgroundColor = function(index){
			switch (index) {
				case 0:
					return  {'background-color':'green'};
					break;
				case 1:
					return {'background-color':'blue'};
				break;
				case 2:
					return {'background-color':'purple'};
				break;	
				default:
					break;
			}
		}
	});