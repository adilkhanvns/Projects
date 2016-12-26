/// <reference path="angular.js" />
var myapp = angular.module("Mymodule", [])
.controller("Mycontroller", function ($scope, $http) {


    var onusercomplet = function (response)
    {
        $scope.users = response.data;
    }
    var onerror = function (reason)
    {
        $scope.error="could not fetch the user!"
    }
    $http.get("https://api.github.com/users/robconery")
        .then(onusercomplet,onerror);

    $scope.message = "Hello Angula!";



})