
//function as abstarction
var work = function () {
    console.log("work hard");
}
//work();

var dowork = function (f)
{
    console.log("starting")
    try{
        f();
    }
    catch (ex) {
        console.log(ex);
    }
    console.log("end");

}
dowork(work);
// function as build module



var createworker = function () {

    var count = 0;

    var task1 = function () {
        count += 1;
        console.log("task1" + count);   // revealing model pattern
    };
    var task2 = function () {
        count += 1;
        console.log("task2",count);
    }

    return {
        job1:task1,
        job2:task2
    }


}
    var worker = createworker();


    worker.job1();
    worker.job2();
    worker.job2();
    worker.job2();

// functio to avoid a lobak variable.


  (function () { //imidiate invoke function expresion pronouced as iffy
        var createworker = function () {

            var count = 0;

            var task1 = function () {
                count += 1;
                console.log("task1" + count);   // revealing model pattern
            };
            var task2 = function () {
                count += 1;
                console.log("task2", count);
            }

            return {
                job1: task1,
                job2: task2
            }


        }
        var worker = createworker();


        worker.job1();
        worker.job2();
        worker.job2();
        worker.job2();
    }());// double parenthesis  function invoke itselef 
//programmer();

 //                                                               //controller 

  //var myapp = angular.module("myModule", []);

  //var Maincontroller = function ($scope) {
  //    $scope.message   = "Hello Angular";
  //}
  //myapp.controller("Maincontroller", Maincontroller)



 //// var myapp = angular.module("myModule", []);

 // var Testcontroller = function ($scope) {
 //     var person = {
 //         firstname: "Adil",
 //         lastname: "Khan",
 //         imagesrc: "~/Image/adil.jpg"
 //     };
 //     $scope.person = person;
 // }
 // myapp.controller("Testcontroller", Testcontroller)