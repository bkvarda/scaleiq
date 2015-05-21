angular.module('scaleiqApp.management')


.controller('SystemCtrl',['$scope','$http', function($scope,$http){
	console.log("ScaleIO Hello");

	var refresh = function(){
		$http.get('/api/systems').success(function(response){
			console.log("I have the data");
			$scope.systemlist = response;
			$scope.system = "";
		});
    };

    refresh();

	$scope.verifyConnection = function(system){

		username = system.username;
		ip = system.ip;
		password = system.password;
	   return true;
	   };

	   
}]);