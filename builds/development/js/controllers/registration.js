myApp.controller('RegistrationController',
	function($scope, $firebaseSimpleLogin, $location, Authentication){
	// adding dependency to Controller 

	

	$scope.login = function() {
		Authentication.login($scope.user)
		.then(function(user){
			$location.path('/meetings');
		}, function(error){
			$scope.message = error.toString();
		});
	}; //login

	$scope.register = function(){
		$location.path('/meetings');
	}; //login

}); // Registration Controller