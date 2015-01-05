myApp.controller('RegistrationController',
	function($scope, $firebaseSimpleLogin, $location){
	// adding dependency to Controller 

	var ref = new Firebase('https://meetingpoint.firebaseio.com/');
	var simpleLogin = $firebaseSimpleLogin(ref);

	$scope.login = function() {
		simpleLogin.$login('password', {
			email: $scope.user.email,
			password: $scope.user.password
		}).then(function(user){
			$location.path('/meetings');
		});
	}; //login

	$scope.register = function(){
		$location.path('/meetings');
	}; //login

}); // Registration Controller