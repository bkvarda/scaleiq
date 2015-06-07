angular.module('scaleiqApp.dashboard')


.controller('DashboardCtrl',['$scope','$http', function($scope,$http){
	console.log("Dashboard Hello");

	 var data = {
                  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                  series: [
                    [5, 2, 4, 2, 0]
                  ]
                };

    $scope.data = data;

    $scope.getData = function(){

    	return data;
    };
	   
}]);