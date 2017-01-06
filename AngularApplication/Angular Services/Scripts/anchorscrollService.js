/// <reference path="angular.js" />
myapp.factory('anchorscrollService', function () {
    return {
        anchorScrollService: function ($scope) {
            var countries = [
                {
                    name: "UK",
                    cities: [
                        { name: "London" },
                        { name: "Manchester" },
                        {name:"Birningham"}
                    ]
                },
                {
                    name: "USA",
                    cities: [
                        { name: "Los Angles" },
                        { name: "Chiago" },
                        { name: "Houstan" }
                    ]
                },
                {
                    name: "India",
                    cities: [
                        { name: "Hyderabad" },
                        { name: "Chennai" },
                        { name: "Mumbai" }
                    ]

                }
            ]
            return countries;
        }

        // return
        // {anchorScrollService : anchorScrollService}
    }


})