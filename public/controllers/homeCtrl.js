angular.module('protest')
	.controller('homeCtrl', function($scope, productSrv, cartSrv, authService){
			productSrv.getProducts().then(function(response){
				$scope.products = response;
				console.log(123456, response);
			})
			$scope.addToCart = function(product){
				cartSrv.addToCart(product);
		  	return product;
		  }
			// $scope.getProductByCategory = function(product){
			// 	console.log(product);
			// 	return product;
			// }

	});

	//   this.getProductByCategory = function(category){
		// 	return $http({
		// 		method: "GET",
		// 		url: "/api/product?category=" + category
		// 	}).then(function(response){
		// 		console.log(response.data);
		// 		return response.data;
		// 	})
		// }
