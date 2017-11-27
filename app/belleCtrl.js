belleApp.controller("belleAppCtrl", function($scope,$location){
    function Guest(fname,lname,telephone,userName,password){
        this.fname = fname;
        this.lname = lname; 
        this.telephone = telephone;
        this.userName = userName;
        this.password = password; 
    }
//var guest = null;
 //  $scope.guests = [new Guest("Dora", "Hajdu","0525239029", "Dorika1", "123456")];

 // console.log(JSON.stringify($scope.guests));

 /*   $scope.guests = [];
    
      $http.get("app/guest/guest.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
          $scope.guests.push(new Guest(response.data[i].fname, response.data[i].lname, 
            response.data[i].telephone, response.data[i].userName, response.data[i].password))  
        }
        //alert("success" + JSON.stringify(response.status));
      }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })
*/

    
});