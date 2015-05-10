angular.module('myApp1')

.controller('LogoutCtrl', 
		function($scope, $rootScope,srvAuth){
	
	console.log("logoutcontrol"+$rootScope.loggedInSession);
	var status1=srvAuth.LoginCheck();
	$scope.$watch('status1',function(){
		console.log("status changed");
	})
	
    })
    .controller('LoginCtrl', 
		function($scope, $rootScope, $http,$window){
	
	
    })
.controller('TodoListController', function($scope,$rootScope,$window,$location) {
    
	//srvAuth.watchLoginChange();
	$scope.$location = $location;
	
	$rootScope.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
 
    $scope.addTodo = function() {
    	$rootScope.todos.push({text:$scope.todoText, done:false});
    	$scope.todoText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($rootScope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTodos = $rootScope.todos;
      $rootScope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $rootScope.todos.push(todo);
      });
    };
    
    $scope.done = function(){
    	
    	
    	console.log("to do list submitted");
    	
    }
});