angular.module('myApp1', [ 'ngRoute','ngResource'])

.config([ '$routeProvider', function($routeProvider,srvAuth) {

	$routeProvider.when('/login', {
		templateUrl : 'partials/home.html',
		controller : 'TodoListController'
	}).when('/submit', {
		templateUrl : 'partials/submit.html',
		controller : 'LogoutCtrl'
	})
	.otherwise({
		redirectTo : '/login'
	});
	//FB.Event.subscribe('auth.authResponseChange', srvAuth.watchLoginChange);
	//FB.Event.subscribe('auth.statusChange', srvAuth.watchLoginChange);

} ])
.run(['$rootScope', '$window', 'srvAuth', 
  function($rootScope, $window, srvAuth) {

  $rootScope.user = "";
  $rootScope.loggedInSession = false;
  $rootScope.finalFollowUp ="";
  $rootScope.infoUser="";
  $window.fbAsyncInit = function() {
	    // Executed when the SDK is loaded

	    FB.init({ 

	      /* 
	       The app id of the web app;
	       To register a new app visit Facebook App Dashboard
	       ( https://developers.facebook.com/apps/ ) 
	      */

	      appId: 440003156173010, 

	      /* 
	       Adding a Channel File improves the performance 
	       of the javascript SDK, by addressing issues 
	       with cross-domain communication in certain browsers. 
	      */

	      channelUrl: 'app/channel.html', 

	      /* 
	       Set if you want to check the authentication status
	       at the start up of the app 
	      */

	      status: true, 

	      /* 
	       Enable cookies to allow the server to access 
	       the session 
	      */

	      cookie: true, 

	      /* Parse XFBML */

	      xfbml: true 
	    });

	    //srvAuth.watchLoginChange();

	  };
  srvAuth.watchLoginChange();
  (function(d){
	    var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
	    js = d.createElement('script'); js.id = id; js.async = true;
	    js.src = "//connect.facebook.net/es_US/all.js";
	    d.getElementsByTagName('head')[0].appendChild(js);
	  }(document));
}])



;
