angular.module('protest')
	.directive('productDir', function(){
		return {
		restrict: 'EA',
		templateUrl: './directives/productDir.html',
		controller: function($scope, cartSrv) {
			$scope.addToCart = function(product) {
			cartSrv.addToCart(product);
			return product;
		}
		},
		scope: {
			product: "="
			}
		}
	})