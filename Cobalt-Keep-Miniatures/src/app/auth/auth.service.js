angular.module('CobaltKeepMiniaturesApp')
    .factory('Auth', function($firebaseAuth) {
        var auth = $firebaseAuth();
        return auth;
    });