app.controller("actorAppCtrl", function ($scope,$http) {
    
        function Admin(fname, lname, telephone, userName,password) {
            this.fname = fname;
            this.lname = lname;
            this.telephone = telephone;
            this.userName = userName;
            this.password = password;
        }
    
        $scope.admins = [];
        
          $http.get("app/admin/admin.json").then(function mySuccess(response) {
            for (var i = 0; i < response.data.length; i++) {
              $scope.admin.push(new Admin(response.data[i].fname, response.data[i].lname, 
                response.data[i].telephone, response.data[i].userName, response.data[i].password))  
            }
            //alert("success" + JSON.stringify(response.status));
          }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
          })

    });