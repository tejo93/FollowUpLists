'use strict';

/* App Module */

angular.module('myApp1', [ 'ngRoute','ngResource'])

.config([ '$routeProvider', function($routeProvider) {

	$routeProvider.when('/login', {
		templateUrl : 'partials/login.html',
		controller : 'LoginCtrl'
	}).when('/logout', {
		templateUrl : 'partials/logout',
		controller : 'LogoutCtrl'
	}).otherwise({
		redirectTo : '/login'
	});

} ])
.run(['$rootScope', '$window',  
  function($rootScope, $window) {

  $rootScope.user = {};

  $window.fbAsyncInit = function() {
      // Executed when the SDK is loaded

		FB.init({
		    appId      : 440003156173010,
		    cookie     : true,  // enable cookies to allow the server to access 
		                        // the session
		    xfbml      : true,  // parse social plugins on this page
		    version    : 'v2.2' // use version 2.2
		  });
		};



		//Load the SDK asynchronously
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/sdk.js";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

}])
.controller('LoginCtrl', function($scope,serviceTest) {
	
	$scope.status="welcome";
	console.log($scope.status);
	
	$scope.status= serviceTest.sessionLogOut();
	console.log($scope.status);
			//$scope.isLoggedIn=true;
		/*$scope.checkLoginState =function(){
		//	$scope.status="facebook in action logged in";
			FB.getLoginStatus(function(response) {
				if (response.status === 'connected') {
				      // Logged into your app and Facebook.
					
					   //$scope.status= 'Thanks for logging in, ' + response.name + '!';
					      
					    
					//$scope.isLoggedIn=false;
				    } else if (response.status === 'not_authorized') {
				      // The person is logged into Facebook, but not your app.
				   // $scope.status='Please log ' + 'into this app.';
				    } else {
				      // The person is not logged into Facebook, so we're not sure if
				      // they are logged into this app or not.
				    //	$scope.status = 'Please log ' +
				      //  'into Facebook.';
				    }

			    });
		};
//$scope.home = this;
		$scope.showPassword = function()
		{
			//$scope.status = serviceTest.sessionLogOut();
		};	
*/
})
.controller('LogoutCtrl', function($scope, $state) {
	
			});

