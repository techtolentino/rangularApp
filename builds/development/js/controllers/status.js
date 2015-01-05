myApp.controller('StatusController', function(
	$scope, $rootScope, $firebaseSimpleLogin){

	$rootScope.$on('$firebaseSimpleLogin:login', function(e, authUser) {
		$scope.userEmail = authUser.email;
	}); //$firebaseSimpleLogin:login

}); //StatusController