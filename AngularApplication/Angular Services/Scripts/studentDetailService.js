/// <reference path="angular.min.js" />
app.factory('studentDetailService', function () {
           var student= function(id)
            {
                if(id==1)
                {
                    return{
                        id:1,name:"Herry",gender:"male"
                    }
                    
                }
                if(id==2)
                {
                    return{
                        id:2,name:"Smith",gender:"male"
                    }
                    
                }
                if(id==3)
                {
                    return{
                        id:3,name:"Herry",gender:"male"
                    }
                    
                }
                if(id==4)
                {
                    return{
                        id:4,name:"paul",gender:"female"
                    }
                    
                }

                if(id==5)
                {
                    return{
                        id:5,name:"Kathi",gender:"female"
                    }
                    
                }
           }

           var studentDetail = function () {

               var Details = [
                   { id: 1, name: "Herry", gender: "male" },
                   { id: 2, name: "Smith", gender: "male" },
                   { id: 3, name: "Herry", gender: "male" },
                   { id: 4, name: "paul", gender: "female" },
                   { id: 5, name: "Kathi", gender: "female" },
               ]

               return Details;

           }
                                   
           return {student:student,
               studentDetail: studentDetail
           };
        
    

});