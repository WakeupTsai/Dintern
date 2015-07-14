var socket = io.connect();

				app.controller("chatCtrl", function($scope) {
				$scope.startChat = false;
				$scope.msgPool = '';
				$scope.msgInput = '';
				$scope.nickname = '';

				// 檢查使用者的nickname是否正確，並由登入介面轉跳到聊天介面
			    $scope.login = function(){
			    	if($scope.nickname.length==0)
			    		window.alert("Please enter your nickname");
			    	else{
			    		$scope.startChat = true; 
			    	}
			    }

			    //將訊息傳到server
			    $scope.sendMsg = function(){	
			    	if($scope.msgInput.length!=0){
				    	socket.emit('client_data', {
				            'msg': $scope.nickname+': '+$scope.msgInput+'\n'
				          });
				    	$scope.msgInput = '';  
			    	}
			    }

			    //若按下enter可以做出和click一樣的動作
			    $scope.pressEnter = function(keyEvent) {
			  		if (keyEvent.which === 13)
			  			$scope.sendMsg();
				}

				$scope.nameEnter = function(keyEvent){
					if (keyEvent.which === 13)
			  			$scope.login();
				}

				//將從server收到的訊息丟進聊天室裡
				//並將聊天室捲到最下方(最新消息)
				socket.on('message', function(data) {
					$scope.msgPool = $scope.msgPool+data.msg;
						$scope.test = $scope.msgPool+data.msg;
						$scope.$apply();
				     	var scrollTop = $("#message")[0].scrollHeight;  
				        $("#message").scrollTop(scrollTop); 
					});

			});