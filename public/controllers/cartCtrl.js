angular.module("protest").controller("cartCtrl", function($scope, user, cartSrv) {
  $scope.user = user;
  $scope.getCart = function(){
  	cartSrv.getCart().then(function(response){
  		$scope.cart= response.data;
  	})
  }
  $scope.getCart();
});