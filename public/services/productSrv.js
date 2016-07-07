angular.module('protest')
	.service('productSrv', function($http){
		// this.getAllProducts = function(){
		// 	return $http({
		// 		method: "GET",
		// 		url: '/api/products'
		// 	}).then(function(response){
		// 		return response.data;
		// 	})
		// }


		this.createProduct = function(product){
			return $http({
				method: "POST",
				url: "/api/product",
				data: product
			}).then(function(response){
				console.log(response.data);
				return response.data;
			})
		}

		this.updateProduct = function(id, product){
			return $http({
				method: "PUT",
				url: "/api/product/" + id,
				data: product
			}).then(function(response){
				console.log(response.data);
				return response.data;
			})
		}

		this.deleteProduct = function(id){
			return $http({
				method: "DELETE",
				url: "/api/product/" + id
			}).then(function(response){
				console.log(response.data);
				return response.data;
			})
		}

		this.getProduct = function(id){
			return $http({
				method: "GET",
				url: "/api/product?_id=" + id
			}).then(function(response){
				console.log(response.data);
				return response.data;
			})
		}

		this.getProducts = function(){
			return $http({
				method: "GET",
				url: "/api/product"
			}).then(function(response){
				console.log(response.data);
				return response.data;
			})
		}

		this.getProductByCategory = function(category){
			return $http({
				method: "GET",
				url: "/api/product?category=" + category
			}).then(function(response){
				console.log(response.data);
				return response.data;
			})
		}


		var products = [{
			title: "Navy-shorts",
			description: "Chino shorts",
			price: 44.99,
			category: "men",
			picture: "./images/2720561_340-240x0-c-default.jpeg"
		},
		{
			title: "Palm-Tree Shirt",
			description: "Cooldown short-sleeve",
			price: 54.99,
			category: "men",
			picture: "./images/1710061_105-240x0-c-default.jpeg"
		},
		{
			title: "Aztec Shorts",
			description: "Gerry shorts with all over print",
			price: 39.99,
			category: "women",
			picture: "./images/2621261_401-240x0-c-default.jpeg"
		},
		{
			title: "Sun-hat",
			description: "Jeanloup hat with leather braided strap",
			price: 29.99,
			category: "women",
			picture: "./images/9611761_269-240x0-c-default.jpeg"
		},
		{
			title: "Girls bikini",
			description: "Triangle bikini with all over print",
			price: 32.99,
			category: "kids",
			picture: "./images/7914661_759-240x0-c-default.jpeg"
		},
		{
			title: "Girls t-shirt",
			description: "Vally JR t-shirt",
			price: 19.99,
			category: "kids",
			picture: "./images/1911361_401-240x0-c-default.jpeg"
		}]
		this.getAllProducts = function(){
			return products;
		}
	})








