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

myapp.controller("CustomService", function ($scope, stringService) {
    $scope.transformstring = function (input) {
        $scope.output = stringService.processString(input);
    }
})

myapp.controller("CountryController", function ($scope, anchorscrollService, $location, $anchorScroll) {
    $scope.countries = anchorscrollService.anchorScrollService();
    $scope.scrollTo = function (countryname) {
        $location.hash(countryname);
        $anchorScroll();

    }




})