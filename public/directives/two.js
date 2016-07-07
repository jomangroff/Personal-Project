angular.module('protest')
	.directive('two', function(){
		return {
			restrict: "EA",
			templateUrl: "./directives/two.html",
			scope: {
				image2: '@'
			}
		}

	})