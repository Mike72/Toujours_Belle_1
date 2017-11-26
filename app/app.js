var belleApp = angular.module("belleApp", ["ngRoute"]);

belleApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/login", {
        templateUrl: "app/login/login.html"
    })
    .when('/register',{
        templateUrl: "app/register/register.html"
    })
    .when('/admin',{
        temlateUrl: "app/admin/admin.html"
        controller: "adminCtrl"
    })
});