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
			},
			link: function(scope,elm,attrs) {
				elm.on('mouseenter', function() {
					elm[0].querySelector('.product-title').style.color = '#8ADAF6';
				}).on('mouseleave', function(){
					elm[0].querySelector('.product-title').style.color = 'black';

				})
			}
		}
	})