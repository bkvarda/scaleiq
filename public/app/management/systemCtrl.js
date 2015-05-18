angular.module('scaleiqApp.management')


.controller('SystemCtrl',['$scope','$http', function($scope,$http){
	console.log("ScaleIO Hello");

	system1 = { "ip": "10.4.44.23",
				"id": "11111111111",
				"username": "admin",
				"password": "Password123",
				"location": "Studio H",
				"description": "Relman Stuff" };

	system2 = { "ip": "10.4.44.23",
				"id": "11111111112",
				"username": "admin",
				"password": "Password123",
				"location": "Studio G",
				"description": "Build Stuff" };			

	$scope.systemlist = [system1,system2];

	$scope.verifyConnection = function(system){
		username = system.username;
		ip = system.ip;
		password = system.password;
		
	   console.log(ip);
	   console.log(username);

	   $http.get('http://localhost:3000/api/login/'+ ip).success(function(response){

	   		console.log(response);
	   		return true;
	   });

	   

	};


}]);