angular.module('scaleiqApp.display')


.controller('DisplayCtrl',['$scope', function($scope){
	console.log("Display Hello");

	dashboardTab = {"name": "Dashboard"};
	managementTab ={"name": "Management"};
	settingsTab = {"name": "Settings"};
	contactTab = {"name": "Contact"};

	 $scope.tabs = [dashboardTab,managementTab,settingsTab,contactTab];
	

	//sets currently selected tab
	 $scope.select= function(tab) {
        $scope.selected = tab; 

 	};

 	//determines if a given tab is Active
 	$scope.isActive = function(tab) {   

       return $scope.selected === tab;
 	};
 	//determines if a given tab is active by name
 	$scope.isSelected = function(name){

 		if($scope.selected){
 		
 			return $scope.selected.name === name;
 		}
 		else{
 			
 			return false;
 		}
 	};

 	

 	

  
	
}]);
