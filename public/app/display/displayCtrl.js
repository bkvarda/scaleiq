angular.module('scaleiqApp.display')


.controller('DisplayCtrl',['$scope', function($scope){
	console.log("Display Hello");

	dashboardTab = {"name": "Dashboard"};
	managementTab ={"name": "Management"};
	settingsTab = {"name": "Settings"};
	contactTab = {"name": "Contact"};

	 $scope.tabs = [dashboardTab,managementTab,settingsTab,contactTab];
	

	
	 $scope.select= function(tab) {
        $scope.selected = tab; 

 	};

 	$scope.isActive = function(tab) {   

       return $scope.selected === tab;
 	};

 	$scope.isSelected = function(name){

 		if($scope.selected){
 		
 			return $scope.selected.name === name;
 		}
 		else{
 			
 			return false;
 		}
 	};

 	

 	

  
	
}]);
