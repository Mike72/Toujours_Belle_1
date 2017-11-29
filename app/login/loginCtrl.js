belleApp.controller("loginCtrl", function($scope, $uibModalInstance, $http, $location, activeUser, User){
    
$scope.uernName = "Mike72";
$scope.password = "Betty77"

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }

       /* console.log(JSON.stringify($scope.users));*/
    });

    $scope.failedAttempt = false;

    $scope.login = function() {
        var guest = getLoggedInUser();
        if (guest != null) {
            activeUser.login(guest);
            $uibModalInstance.close("Logged-in");
            $location.path("/guest")
        } else {
            $scope.failedAttempt = true;
        }




        console.log($scope.userName + " " + $scope.password)
    }

    var getLoggedInUser = function() {
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                return $scope.users[i];
            }
        }
        return null;
    }

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }
   
});