belleApp.controller("belleAppCrtl", function($scope,){
    function Guest(fname,lname,telephone,mail){
        this.fname = fname;
        this.lname = lname;
        this.telephone = telephone;
        this.mail = mail;
    }

    $scope.guests = [new Guest("Dora", "Hajdu","0525239029", "dudorka@hotmail.com")];

    console.log(guests);

});