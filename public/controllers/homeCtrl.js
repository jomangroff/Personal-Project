angular.module('protest')
	.controller('homeCtrl', function($scope, productSrv, cartSrv, authService){
			productSrv.getProducts().then(function(response){
				$scope.products = response;
				console.log(123456, response);
			})
			$scope.addToCart = function(product){
				console.log(product);
				cartSrv.addToCart(product);
		  	return product;
		  }

			// $scope.products = productSrv.getAllProducts();
	});