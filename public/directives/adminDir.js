angular.module('protest')
	.directive('adminDir', function(){
		return {
		restrict: 'EA',
		templateUrl: './directives/adminDir.html',
		// controller: function($scope, productSrv) {
		// 	$scope.deleteProduct = function(product_id){
		// 		productSrv.deleteProduct(product_id).then(function(response){
		// 			console.log('response');
		// 		})
		// 	}
		// 	$scope.select = function(){
		// 		$scope.selected=$scope.product;
		// 	}
		// },
		// scope: {
		// 	product: "=",
		// 	selected: "="
		// 	}
		}
	})

