var belleApp = angular.module("belleApp", ["ngRoute"]);

belleApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
});