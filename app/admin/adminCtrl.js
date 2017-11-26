app.controller("actorAppCtrl", function ($scope) {
    
        function Admin(fname, lname, telephone, userName,password) {
            this.fname = fname;
            this.lname = lname;
            this.telephone = telephone;
            this.userName = userName;
            this.password = password;
        }
    
        $scope.admins = [];
        
          $http.get("admin.json").then(function mySuccess(response) {
            for (var i = 0; i < response.data.length; i++) {
              $scope.admin.push(new Admin(response.data[i].fname, response.data[i].lname, 
                response.data[i].telephone, response.data[i].userName, response.data[i].password))  
            }
            //alert("success" + JSON.stringify(response.status));
          }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
          })
      /* var actor = new Actor("Daisy", "Ridley", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_UY317_CR20,0,214,317_AL_.jpg", 
        "http://www.imdb.com/name/nm5397459/?ref_=tt_ov_st_sm");
        console.log(actor);*/
    });