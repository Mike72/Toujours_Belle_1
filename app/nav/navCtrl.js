belleApp.controller("navCtrl", function($scope, $location) {
    $scope.isActive = function(path) {
        return $location.path().includes(path);
    }
});

/*
belleApp.controller("NavCtrl", function ($scope, activeUser) {
    
  //  $scope.isLoggedIn = activeUser.isLoggedIn();
    

   $scope.isLoggedIn = function() {
       return activeUser.isLoggedIn();
    };
});*/