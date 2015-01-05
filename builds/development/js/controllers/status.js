myApp.controller('StatusController', function(
	$scope, $rootScope, Authentication, $location, $firebaseSimpleLogin){

	$scope.logout = function() {
		Authentication.logout();
		$location.path('/login');
	}; //logout

	$rootScope.$on('$firebaseSimpleLogin:login', function(e, authUser) {
		$scope.userEmail = authUser.email;
	}); //$firebaseSimpleLogin:login

	$rootScope.$on('$firebaseSimpleLogin:logout', function(e, authUser) {
		$scope.userEmail = null;
	}); //$firebaseSimpleLogin:logout

}); //StatusController