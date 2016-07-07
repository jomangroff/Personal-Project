angular.module('protest')
	.service('kidSrv', function($http){
		// this.getAllProducts = function(){
		// 	return $http({
		// 		method: "GET",
		// 		url: '/api/products'
		// 	}).then(function(response){
		// 		return response.data;
		// 	})
		// }
		var products = [{
			title: 'Shorts',
		},
		{
			title: 'Pants',
		}]
		this.getAllProducts = function(){
			return products;
		}
	})