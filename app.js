var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/challenge1.html',
    controller: 'MonthsCtrl'
  })
  .when('/challenge-two', {
    templateUrl: 'templates/challenge2.html',
    controller: 'FizzBuzzCtrl'
  })
  .when('/challenge-three', {
    templateUrl: 'templates/challenge3.html',
    controller: 'CountriesCtrl'
  })
  .otherwise('/');
  
  
  
}]);

app.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);