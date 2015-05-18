var app = angular.module('scaleiqApp.management', []);

app.directive('management', function(){
 return {
  restrict: 'E',
  templateUrl: '/management/management.html'
 };

 });
