'use strict';

/* Services */
angular.module('myApp1').service("srvAuth",function($rootScope){

	this.watchLoginChange = function() {

		var _self = this;
		console.log("reached here");
		FB.Event.subscribe('auth.authResponseChange', function(res) {
		console.log(res);
		if (res.status === 'connected') {

			/* 
	       The user is already logged, 
	       is possible retrieve his personal info
			 */
			$rootScope.loggedInSession = true;
			_self.getUserInfo();
			
			console.log("connected");
			console.log("session is"+ $rootScope.loggedInSession)
			/*
	       This is also the point where you should create a 
	       session for the current user.
	       For this purpose you can use the data inside the 
	       res.authResponse object.
			 */

		} 
		else {

			$rootScope.$apply(function() { 

				
				$rootScope.loggedInSession = false;
				$rootScope.user = _self.user = {}; 
				 //$location.path("login");
				 $window.location.href = '#/login';
				
			});
			
			console.log("disconnected" + $rootScope.loggedInSession );
			
			/*
	       The user is not logged to the app, or into Facebook:
	       destroy the session on the server.
			 */

		}});
		}

		

	;

	this.getUserInfo = function() {

		var _self = this;

		FB.api('/me', function(res) {

			$rootScope.$apply(function() { 

				$rootScope.user = _self.user = res; 
				console.log($rootScope.user.email);

			});

		});

	};

	this.logout = function() {

		var _self = this;
		console.log("logout called");
		FB.logout(function(response) {
			alert();
			$rootScope.$apply(function() { 

				$rootScope.user = _self.user = {}; 
				console.log("logout called in FB");
				document.location.reload();

			}); 

		});
		console.log("logout called");

	};
});
