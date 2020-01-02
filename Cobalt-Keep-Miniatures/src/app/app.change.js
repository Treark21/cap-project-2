angular.module('CobaltKeepMiniaturesApp')

var loginButton = angular.module("loginButton", []);
var homeButton = angular.module("homeButton", []);
var galleryButton = angular.module("galleryButton", []);
var registerButton = angular.module("registerButton", []);
var servicesButton = angular.module("servicesButton", []);
var aboutButton = angular.module("aboutButton", []);
var contactButton = angular.module("contactButton", []);

loginButton.controller("loginChange", ["$scope", "$window", function($scope,  $window){
    $scope.enterSite = function(){
        $window.location.href = "Cobalt-Keep-Miniatures\src\app\auth\login.html";        
    }
}]);
homeButton.controller("homeChange", ["$scope", "$window", function($scope,  $window){
    $scope.enterSite = function(){
        $window.location.href = "Cobalt-Keep-Miniatures\src\app\app.component.html";        
    }
}]);
galleryButton.controller("galleryChange", ["$scope", "$window", function($scope,  $window){
    $scope.enterSite = function(){
        $window.location.href = "Cobalt-Keep-Miniatures\src\app\gallery.html";        
    }
}]);
registerButton.controller("registerChange", ["$scope", "$window", function($scope,  $window){
    $scope.enterSite = function(){
        $window.location.href = "Cobalt-Keep-Miniatures\src\app\auth\register.html";        
    }
}]);
servicesButton.controller("servicesChange", ["$scope", "$window", function($scope,  $window){
    $scope.enterSite = function(){
        $window.location.href = "Cobalt-Keep-Miniatures\src\app\services.html";        
    }
}]);
aboutButton.controller("aboutChange", ["$scope", "$window", function($scope,  $window){
    $scope.enterSite = function(){
        $window.location.href = "Cobalt-Keep-Miniatures\src\app\about-us.html";        
    }
}]);
contactButton.controller("contactChange", ["$scope", "$window", function($scope,  $window){
    $scope.enterSite = function(){
        $window.location.href = "Cobalt-Keep-Miniatures\src\app\contact.html";        
    }
}]);