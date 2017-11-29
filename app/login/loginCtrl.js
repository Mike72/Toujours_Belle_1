belleApp.controller("loginCtrl", function($scope, $uibModalInstance, $http, $location, activeUser, User){
    
    $http.get("app/data/guest.json").then(function (response) {
        $scope.guests = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.guest.push(new Guest(response.data[i]));
        }

        console.log(JSON.stringify($scope.guests));
    });
/*
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




        //console.log($scope.email + " " + $scope.password)
    }
/*
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
   */
});