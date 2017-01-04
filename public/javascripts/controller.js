var controllers=angular.module('jthink.controllers');
controllers.controller('LoginCTRL',['$scope','LoginService',function($scope,LoginService){
	$scope.login={};
	$scope.login.submit=function(){
		console.log($scope.login.email);
		console.log($scope.login.password);
		console.log("执行中...");
		LoginService.login({},{
			email:$scope.login.email,
			password:$scope.login.password
		},
		function(success){
			if(success.status=="success"){
				alert('login success');
			}else{
				alert('login failer');
			}
		},
		function(error){
			alert('error');
		});
	}
}])