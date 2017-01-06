/// <reference path="angular.js" />
var app = angular.module("MyModule", [])

.controller("CountryController", function ($scope) {
    this.name = "India";
})
.controller("StateController", function ($scope) {
    this.name = "Maharastra";
})
.controller("CityController", function ($scope) {
    this.name = "Mumbai";
})