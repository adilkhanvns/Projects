/// <reference path="angular.js" />
var myapp = angular.module("mymodel", [])
                   .controller("mycontroller", function ($scope) {
                       var employees= [
                           {name:"Bin",dateofbirth: new Date("November 23,1980"),gender:"Male",salary:55000.788},
                        { name: "sara", dateofbirth: new Date("may 13,1970"), gender: "female", salary: 69000 },
                       { name: "mark ", dateofbirth: new Date("august 22,1974"), gender: "Male", salary: 55000 },
                       { name: "tood", dateofbirth: new Date("september 11,1955"), gender: "Male", salary: 54000.788 },
                       { name: "pan", dateofbirth: new Date("july 12,1958"), gender: "female", salary: 90000 },
                       { name: "tom", dateofbirth: new Date("june 01,1940"), gender: "female", salary: 80000 }
                       ];
                       $scope.employees = employees;

                       $scope.rowlimit = 3;
                   });

myapp.controller("Employees",function ($scope) {
    var employees= [
        {name:"Bin",dateofbirth: new Date("November 23, 1980"),gender:"Male",salary:55000.788},
     { name: "sara", dateofbirth: new Date("May 13, 1970"), gender: "female", salary: 69000 },
    { name: "mark ", dateofbirth: new Date("August 22, 1974"), gender: "Male", salary: 55000 },
    { name: "tood", dateofbirth: new Date("September 11, 1955"), gender: "Male", salary: 54000.788 },
    { name: "pan", dateofbirth: new Date("July 12, 1958"), gender: "female", salary: 90000 },
    { name: "tom", dateofbirth: new Date("June 01, 1940"), gender: "female", salary: 80000 }
    ];
    $scope.employees = employees;

    $scope.sortcolumn = "name";
    $scope.reversesort = false;

    $scope.sortdate = function (column) {
        $scope.reversesort = ($scope.sortcolumn == column) ? !$scope.reversesort : false;
        $scope.sortcolumn = column;
    }
});

myapp.controller("SortEmployee", function ($scope) {
    var employees = [
        { name: "Bin", gender: "Male", salary: 55000.788, city:"London" },
     { name: "sara", gender: "female", salary: 69000, city: "chennai" },
    { name: "mark ", gender: "Male", salary: 55000, city: "London" },
    { name: "tood", gender: "Male", salary: 54000.788, city: "chennai" },
    { name: "pan", gender: "female", salary: 90000, city: "London" },
    { name: "tom", gender: "female", salary: 80000, city: "London" }
    ];
    $scope.employees = employees;

    $scope.search = function (item) {
        if ($scope.searchtext == undefined)
            return true;
        else
        {
            if(item.name.toLowerCase().indexOf($scope.searchtext.toLowerCase()) !=-1 || item.city.toLowerCase().indexOf($scope.searchtext.toLowerCase()) !=-1)
                return true;
            
        } 
                return false ;
    }
});

myapp.filter("gender", function () {
 
    return function (gender) {
        switch (gender) {
            case 1:
                return "Male"
            case 2:
                return "Female"
            case 3:
                return "Not Define";

        }
    }
})
    .controller("CustomFlter", function ($scope) {
        var employee = [
         {name: "Bin", gender: 1, city: "London"},
         { name: "sara", gender: 2, city: "chennai" },
        { name: "mark ", gender:3, city: "London" },
        { name: "tood", gender: 1, city: "chennai" },
        { name: "pan", gender: 2, city: "London" },
        { name: "tom", gender:1, city: "London" }

        ];
        $scope.employee = employee;
    })