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

	$scope.deleteSystem = function(id){
		console.log("removing "+id);
		$http.delete('/api/systems/' + id).success(function(response){
			console.log(response);
			refresh();
		});	
	};

	$scope.editSystem = function(id){
		console.log("editing "+id);
		$http.get('/api/systems/'+id).success(function(response){
			$scope.system = response;	
		});

	};

	$scope.updateSystem = function(){
		console.log("updating "+$scope.system._id);
		$http.put('/api/systems/'+$scope.system._id, $scope.system).success(function(response){
		
			refresh();
		});
	};

	$scope.verifyConnection = function(system){

		return system.verified;
	   };

	   
}]);