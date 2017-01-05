app.controller('FizzBuzzCtrl', ['$scope', function($scope) {
	function range(start, stop, step){
	  var a=[start], b=start;
	  while(b<stop){b+=step;a.push(b)}
	  return a;
	}
	$scope.numbers = range(1, 100, 1);
	$scope.title = "Challenge Two: Fizz Buzz";
	
}]);