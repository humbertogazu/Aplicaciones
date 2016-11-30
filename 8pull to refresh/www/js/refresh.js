angular.module('controller.refresh',[])

.controller('refreshCtrl', function($scope,$timeout){
$scope.items = ['Item 1', 'Item 2', 'Item 3']; // es un arreglo con 3 items       
  
  $scope.doRefresh = function() { 
    
    console.log('Refreshing!');  // mostrar en consolola el mensage escrito
    $timeout( function() {            
      //simulate async response
      $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4); 

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');                           
    
    }, 1000);                                                                
      
  };
  
});

