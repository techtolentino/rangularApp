myApp.controller('MeetingsController',
	function($scope, $firebase, $rootScope,
		$firebaseSimpleLogin, FIREBASE_URL){
	// adding dependency to Controller

	var ref = new Firebase(FIREBASE_URL);
	var simpleLogin = $firebaseSimpleLogin(ref);

	simpleLogin.$getCurrentUser().then(function(authUser){

		if(authUser !== null){

			var ref = new Firebase(FIREBASE_URL + '/users/' + authUser.uid + '/meetings');
			var meetingsInfo = $firebase(ref);
			var meetingsObj = $firebase(ref).$asObject();
			var meetingsArray = $firebase(ref).$asArray();

			meetingsObj.$loaded().then(function(data){
				$scope.meetings = meetingsObj;
			}); // meetings Object Loaded

			meetingsArray.$loaded().then(function(data){
				$rootScope.howManyMeetings = meetingsArray.length;
			}); // meetings Array Loaded

			meetingsArray.$watch(function(event){
				$rootScope.howManyMeetings = meetingsArray.length;
			});


			$scope.meetingsInfo = meetingsInfo.$asObject();

			$scope.addMeeting = function(){
				meetingsInfo.$push({
					name: $scope.meetingname,
					date: Firebase.ServerValue.TIMESTAMP
				}).then(function(){
					$scope.meetingname = '';
				});
			}; //add meeting

			$scope.deleteMeeting = function(key) {
				meetingsInfo.$remove(key);
			} //delete meeting
			
		}

	}); //get user

}); //MeetingsController