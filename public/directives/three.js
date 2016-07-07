angular.module('protest')
	.directive('three', function(){
		return {
			restrict: "EA",
			templateUrl: "./directives/three.html",
			scope: {
			image3: "@"
			}
		}
	})