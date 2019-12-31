'use strict';

/**
 * @ngdoc overview
 * @name CobaltKeepMiniaturesApp
 * @description
 * # CobaltKeepMiniaturesApp
 *
 * Main module of the application.
 */
angular
  .module('CobaltKeepMiniaturesApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      
.state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(auth){
              $state.go('home');
            }, function(error){
              return;
            });
          }
        }
      })
      
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/register.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(auth){
              $state.go('home');
            }, function(error){
              return;
            });
          }
        }
        
});
    $urlRouterProvider.otherwise('/');
  })
  
  
  .config(function(){
    var firebaseConfig = {
      apiKey: "AIzaSyC3NSBqNSXW_9DwjLCw9uEmibc5jateCaQ",
      authDomain: "cap-proj-practice.firebaseapp.com",
      databaseURL: "https://cap-proj-practice.firebaseio.com",
      projectId: "cap-proj-practice",
      storageBucket: "cap-proj-practice.appspot.com",
      messagingSenderId: "1005077049627",
      appId: "1:1005077049627:web:6f34e24009a23e1ce8a3be",
      measurementId: "G-4C2X5XM339"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  });
