angular.module('protest')
	.directive('one', function(){
		return {
			restrict: "EA",
			templateUrl: "./directives/oneAndOne.html",
			scope: {
				product: "="
			}
		}
	})