/// <reference path="angular.js" />


var app = angular.module("route", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.caseInsenitiveMatch = true;  
    $routeProvider
        .when("/tHome", {
            templateUrl: "Tempelate/Home.html",
            controller: "Homecontroller as homeCtrl"
        })
          .when("/tCource", {
              templateUrl: "Tempelate/Cources.html",
              controller: "coursesController as courceCtrl"
          })
          .when("/tStudent", {
              templateUrl: "Tempelate/Student.html",
              controller: "studentsController as studentCtrl"
          })
         .when("/tStudentDetail", {
             templateUrl: "Tempelate/studentDetail.html", // retriving all student details using studentDetailService.js
             controller: "studentDetailController  as studentDetailCtrl"
         })
        .when("/tStudentDetail/:id", {
            templateUrl: "Tempelate/individualstudentDetail.html",
            controller: "individualstudentDetailController"
        })
        .otherwise(
         {
             redirectTo: "/tHome"
         });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

app.controller('Homecontroller', function () {
        this.message = "Home Page";

});

app.controller("coursesController", function () {
    debugger;
    this.courses = ["C#", "VB.NET", "SQLSERVER", "ASP.NET"];

});
app.controller("studentsController", function () {
    this.students = ["LEO", "TONYY", "MICHAL", "DEV", "CHAMBER", "THOMAS", "MIKE", "JAUME", "CHIRIS"];

});

app.controller("studentDetailController", function ($scope, studentDetailService) {
    debugger;
    $scope.$on("$routeChangeStart", function (event, next, current) {
        if (!confirm('Are you want t nevigate from this page to' + next.$$route.originalPath)) {
            event.preventDefault();
        }
    })
    $scope.studentDetail = studentDetailService.studentDetail();

})

app.controller("individualstudentDetailController", function ($scope, studentDetailService, $routeParams) {
    debugger;
    if ($routeParams.id) {
        $scope.studentDetail = studentDetailService.student($routeParams.id);
    }
})