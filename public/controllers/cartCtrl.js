angular.module("protest").controller("cartCtrl", function($scope, user, cartSrv, $templateCache) {
    $templateCache.removeAll();

  $scope.user = user;
  $scope.getCart = function(){
  	cartSrv.getCart().then(function(response){
  		$scope.cart = response.data;
      $scope.total($scope.cart.items);
  	})
  }
  $scope.getCart();

  $scope.removeFromCart = function(cart_id, product_id){
  	cartSrv.removeFromCart(cart_id, product_id).then(function(response){
  		$scope.getCart();
  	})
  }

  $scope.total = function(products){
    // console.log(products);
    var total = 0;
    for (var i = 0; i < products.length; i++) {
      total += products[i].quantity * products[i].product.price;
    }
    $scope.cart.total = total;
  }
});