angular.module('protest')
	.controller('productCtrl', function($scope, productSrv){
			// productSrv.getProducts().then(function(response){
			// 	$scope.products = response;
			// 	console.log(12356, response);
			// })

			$scope.createProduct = function(product){
				productSrv.createProduct(product).then(function(response){
					console.log(response);
				})
			}


	})