var app = angular.module('scaleiqApp.dashboard', []);

app.directive('dashboard', function(){
 return {
  restrict: 'E',
  templateUrl: '/dashboard/dashboard.html'
 };

 });
