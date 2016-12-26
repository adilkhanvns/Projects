/// <reference path="angular.js" />

var myapp = angular.module("mymodel", [])
                   .controller("mycontroller", function ($scope) {
                       $scope.message = "Hello Angular";
                   });

var ComplexOperation = function ($scope) {
    var employee = {
        firstname: "Adil",
        lastname: "Khan",
        gender: "Male"
    };
    $scope.employee = employee;
}

myapp.controller("ComplexOperation", ComplexOperation)

var ngrepeat = function ($scope) {
    var employees = [
{
    firstname: "Adil",
    lastname: "Khan",
    gender: "Male"
},
{
    firstname: "salman ",
    lastname: "Khan",
    gender: "Male"
},
    {
        firstname: "Aamir ",
        lastname: "Khan",
    gender: "Male"
},
{
    firstname: "Sharukh",
    lastname: "Khan",
   gender: "Male"
}
    ];
    $scope.employees=employees
}
myapp.controller("employees", ngrepeat)