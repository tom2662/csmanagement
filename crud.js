
let app=angular.module('myapp',[
    '720kb.datepicker',
]);


app.filter('offset', function() {
    return function(input, start) {
      start = parseInt(start, 10);
      return input.slice(start);
    };
  });


app.controller('myctrl',function($scope){

    $scope.customers = [];
    let empid = 1;

    // paging


    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;

    $scope.range = function() {
    let rangeSize = 3;
    let ret = [];
    let start = 0;

    start = $scope.currentPage;
    if ( start > $scope.pageCount()-rangeSize ) {
        start = $scope.pageCount()-rangeSize+1;
    }

    for (let i = start; i<start+rangeSize; i++) {
        ret.push(i);
    }
    return ret;
    };

    $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
        $scope.currentPage--;
    }
    };

    $scope.prevPageDisabled = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
    };

    $scope.pageCount = function() {
    return Math.ceil($scope.customers.length/$scope.itemsPerPage)-1;
    };

    $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
        $scope.currentPage++;
    }
    };

    $scope.nextPageDisabled = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    };

    $scope.setPage = function(n) {
    $scope.currentPage = n;
    };


    // paging


    // insert new customer

    $scope.saveRecord = function () {
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

                for (i in $scope.customers) {
             
                                if ($scope.customers[i].id == id) {
                                
                                $scope.newCustomer = angular.copy($scope.customers[i]);
                                
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




