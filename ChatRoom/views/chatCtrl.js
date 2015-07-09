app.controller("chatCtrl", function($scope) {
	$scope.startChat = true;
	$scope.msgPool = '';
	$scope.msgInput = '';

    $scope.login = function(){
    	$scope.startChat = true;
    }

    $scope.sendMsg = function(){
    	$scope.msgPool = $scope.msgPool+$scope.nickname+': '+$scope.msgInput+'\n';
    	$scope.msgInput = '';    	
    }

    $scope.pressEnter = function(keyEvent) {
  		if (keyEvent.which === 13 && $scope.msgInput.length!=0)
  			$scope.sendMsg();
	}

	$scope.nicknameCheck = function(){
		if(  $scope.nickname==undefined || $scope.nickname.length==0 )
			return 'Anonymous';
		else 
			return $scope.nickname;
	}
});