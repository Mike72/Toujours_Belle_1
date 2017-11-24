belleApp.controller("belleAppCrtl", function($scope){
    function Guest(fname,lname,telephone,userName,password){
        this.fname = fname;
        this.lname = lname; 
        this.telephone = telephone;
        this.userName = userName;
        this.password = password; 
    }

    $scope.guests = [new Guest("Dora", "Hajdu","0525239029", "Dorika1", "123456")];

    console.log(guests);

});