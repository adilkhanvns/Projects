/// <reference path="angular.js" />



var myapp = angular.module("myModule", []);

var Maincontroller = function ($scope) {
    $scope.message = "Hello Angular";
}
myapp.controller("Maincontroller", Maincontroller)

//var myapp = angular.module("myModule", []);

var Testcontroller = function ($scope) {
    var person={
        firstname: "Adil",
        lastname: "Khan",
        imagesrc: "Image/adil.jpg",
    };
    $scope.person = person;
}
myapp.controller("Testcontroller", Testcontroller);
