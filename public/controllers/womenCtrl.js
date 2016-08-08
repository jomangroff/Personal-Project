angular.module('protest')
	.controller('womenCtrl', function($scope, productSrv, cartSrv, authService){
			// productSrv.getProducts().then(function(response){
			// 	$scope.products = response;
			// 	console.log(123456, response);
			// })
			$scope.addToCart = function(product){
				// console.log(product);
				cartSrv.addToCart(product);
		  	return product;
		  }

		  productSrv.getProductByCategory("Women").then(function(response){
					$scope.products = response;
					// console.log(987, response);
				})

			// $scope.products = productSrv.getAllProducts();
	});