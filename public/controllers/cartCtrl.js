angular.module("protest").controller("cartCtrl", function($scope, user, cartSrv) {
  $scope.user = user;
  $scope.getCart = function(){
  	cartSrv.getCart().then(function(response){
  		$scope.cart = response.data;
  	})
  }
  $scope.getCart();

  $scope.removeFromCart = function(cart_id, product_id){
  	cartSrv.removeFromCart(cart_id, product_id).then(function(response){
  		$scope.getCart();
  	})
  }
});