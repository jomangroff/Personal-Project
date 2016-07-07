angular.module('protest')
	.controller('menCtrl', function($scope, productSrv, cartSrv, authService){
				$scope.addToCart = function(product){
				console.log(product);
				cartSrv.addToCart(product);
		  	return product;
		  }
		  productSrv.getProductByCategory("Men").then(function(response){
					$scope.products = response;
					console.log(987, response);
				})

			// $scope.products = productSrv.getAllProducts();
	});