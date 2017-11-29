// Shared User Constructor
belleApp.factory("User", function(){
    function User(plainObject) {
        this.userName = plainObject.userName;
        this.password = plainObject.password;
        this.firstName = plainObject.fname;
        this.lastName = plainObject.lname;
        this.data = plainObject.data;
    };

    return User;
});

// Service that manges the active user
belleApp.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get
    };   
});