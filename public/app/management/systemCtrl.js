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

    $scope.addSystem = function(){
		console.log($scope.system);
		$http.post('/api/systems', $scope.system).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.verifyConnection = function(system){

		return system.verified;
	   };

	   
}]);