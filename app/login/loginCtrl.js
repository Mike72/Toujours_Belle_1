belleApp.controller("loginCtrl", function($scope, $http,){
    

    $scope.login = function() {
        if(userName===admin.userName){
           return "Success";
        }else{
            return "Error";
        }
    }
});