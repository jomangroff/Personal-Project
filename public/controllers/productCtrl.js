angular.module('protest')
	.controller('productCtrl', function($scope, productSrv, $stateParams, cartSrv){
			// productSrv.getProducts().then(function(response){
			// 	$scope.products = response;
			// 	console.log(12356, response);
			// })
			$scope.newProduct = {};
			$scope.newProduct.sideImages = [];
			$scope.changeImage = function(url){
				$scope.image = url;
			}
			$scope.addToCart = function(product){
				console.log(product);
				cartSrv.addToCart(product);
		  	return product;
		  }

			$scope.createProduct = function(product){
				productSrv.createProduct(product).then(function(response){
					console.log(response);
				})
			}

			$scope.getOneProduct = function(){
				productSrv.getOneProduct($stateParams.id).then(function(response){
					console.log(response);
					$scope.product = response;
					$scope.image = response.picture;
				})
			}
			$scope.getOneProduct();
	})