
let app=angular.module('myapp',[
    '720kb.datepicker',
]);


app.controller('myctrl',function($scope){

    $scope.customers = [];
    let empid = 1;

    // insert new customer

    $scope.saveRecord = function () {

        if($scope.newCustomer != undefined){
            if($scope.newCustomer.name == null || $scope.newCustomer.dob == null || $scope.newCustomer.address == null )
            {   
                alert('check again');
            }else{
                if ($scope.newCustomer.id == null) {
                    $scope.newCustomer.id = empid++;
                    $scope.customers.push($scope.newCustomer);
                     
                    } else {
                     
                        for (i in $scope.customers) {
                        
                            if ($scope.customers[i].id == $scope.newCustomer.id) {
                            
                            $scope.customers[i] = $scope.newCustomer;
                            
                            }
                        
                        }
                     
                    }
                     
                    $scope.newCustomer = {};
            }
        }else{
            alert('check again');
        }
 
       

      
         
        }

    //  delete customer   
    
        $scope.delete = function (id) {
     
            for (i in $scope.customers) {
             
            if ($scope.customers[i].id == id) {
             
            $scope.customers.splice(i, 1);
             
            $scope.newCustomer = {};
             
            }
             
            }
             
            }

    // edit new customer
             
        $scope.edit = function (id) {

            if($scope.newCustomer.name == null || $scope.newCustomer.dob == null || $scope.newCustomer.address == null )
            {   
                alert('check again');
            }else{
                for (i in $scope.customers) {
             
                                if ($scope.customers[i].id == id) {
                                
                                $scope.newCustomer = angular.copy($scope.customers[i]);
                                
                                }
                     
                    }
            }
             
        
             
        }

            $scope.curPage = 1,
            $scope.itemsPerPage = 3,
            $scope.maxSize = 5;
            
            this.items = $scope.customers;
            
            $scope.numOfPages = function () {
            return Math.ceil($scope.customers.length / $scope.itemsPerPage);
            
            };
            
            $scope.$watch('curPage + numPerPage', function() {
            let begin = (($scope.curPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;
            
            $scope.filteredItems = $scope.customers.slice(begin, end);
            });

        

});




