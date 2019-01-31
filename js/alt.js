var app = angular.module("myApp",['ui.router']);
app.config(function($stateProvider){
    var signinState = {
        name: 'signin',
        url: '/signin',
        templateUrl: './signin.html',
        controller: 'signinStateTest'
    }
    var signupState = {
        name: 'signup',
        url: '/signup',
        templateUrl: './signup.html',
        controller: 'signupStateTest'
    }
    $stateProvider.state(signinState);
    $stateProvider.state(signupState);
    

});