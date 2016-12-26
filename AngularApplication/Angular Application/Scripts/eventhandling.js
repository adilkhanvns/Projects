/// <reference path="angular.js" />
var myapp = angular.module("mymodel", []).controller("eventhandling", function ($scope) {
    var technologies = [
        { name: "C#", like: 0, dislike: 0 },
        {name:"Asp.Net",like:0,dislike:0},
        {name:"SQl Server",like:0,dislike:0},
       {name:"Angular js",like:0,dislike:0}
];
    $scope.technologies = technologies;

    $scope.incrementlike = function (technoplogy) {
        technoplogy.like++;
    }


    $scope.incrementdislike = function (technoplogy) {
        technoplogy.dislike++;
    }
});