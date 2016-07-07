angular.module('protest', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './views/home.html',
			controller: "homeCtrl"
		})
		.state('men', {
			url: '/men',
			templateUrl: './views/men.html',
			controller: 'menCtrl'
		})
		.state('addproduct', {
			url: '/addproduct',
			templateUrl: './views/addProduct.html',
			controller: 'productCtrl'
		})
		.state('women', {
			url: '/women',
			templateUrl: './views/women.html',
			controller: 'womenCtrl'
		})
		.state('kids', {
			url: '/kids',
			templateUrl: './views/kids.html',
			controller: 'kidsCtrl'
		})
		.state('product', {
			url: '/product/:id', // /product/women , /product/men
			templateUrl: './views/product.html',
			controller: 'productCtrl'
		})
		.state('login', {
      url: '/login',
      templateUrl: './views/loginPage.html',
      controller: 'loginCtrl'
    }).state('cart', {
      url: '/cart',
      templateUrl: './views/cart.html',
      controller: 'cartCtrl',
      resolve: {
        user: function(authService, $state) {
          return authService.getCurrentUser().then(function(response) {
            if (!response.data)
              $state.go('login');
            return response.data;
          }).catch(function(err) {
            $state.go('login');
          });
        }
      }
    });

	});
angular.module("protest").controller("cartCtrl", function($scope, user, cartSrv) {
  $scope.user = user;
  $scope.getCart = function(){
  	cartSrv.getCart().then(function(response){
  		$scope.cart= response.data;
  	})
  }
  $scope.getCart();
});
angular.module('protest')
	.controller('homeCtrl', function($scope, productSrv, cartSrv, authService){
			productSrv.getProducts().then(function(response){
				$scope.products = response;
				console.log(123456, response);
			})
			$scope.addToCart = function(product){
				cartSrv.addToCart(product);
		  	return product;
		  }
			// $scope.getProductByCategory = function(product){
			// 	console.log(product);
			// 	return product;
			// }

	});

	//   this.getProductByCategory = function(category){
		// 	return $http({
		// 		method: "GET",
		// 		url: "/api/product?category=" + category
		// 	}).then(function(response){
		// 		console.log(response.data);
		// 		return response.data;
		// 	})
		// }

angular.module('protest')
	.controller('kidsCtrl', function($scope, productSrv, cartSrv, authService){
			// productSrv.getProducts().then(function(response){
			// 	$scope.products = response;
			// 	console.log(123456, response);
			// })
			$scope.addToCart = function(product){
				// console.log(product);
				cartSrv.addToCart(product);
		  	return product;
		  }
		  productSrv.getProductByCategory("Kids").then(function(response){
					$scope.products = response;
					console.log(987, response);
				})

			// $scope.products = productSrv.getAllProducts();
	});
 angular.module("protest").controller("loginCtrl", function($scope, authService, $state) {

  $scope.login = function(user) {
    authService.login(user).then(function(response) {
      if (!response.data) {
        alert('User does not exist');
        $scope.user.password = '';
      } else {
        $state.go('home');
      }
    }).catch(function(err) {
      alert('Unable to login');
    });
  };

  $scope.register = function(user) {
    authService.registerUser(user).then(function(response) {
      if (!response.data) {
        alert('Unable to create user');
      } else {
        alert('User Created');
        $scope.newUser = {};
      }
    }).catch(function(err) {
      alert('Unable to create user');
    });
  };

 $scope.logout = function() {
    authService.logout().then(function(response) {
      $state.go('login');
    });
  };
 });
angular.module('protest')
	.controller('menCtrl', function($scope, productSrv, cartSrv, authService){
				$scope.addToCart = function(product){
				// console.log(product);
				cartSrv.addToCart(product);
		  	return product;
		  }
		  productSrv.getProductByCategory("Men").then(function(response){
					$scope.products = response;
					console.log(987, response);
				})

			// $scope.products = productSrv.getAllProducts();
	});
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
angular.module('protest')
	.controller('womenCtrl', function($scope, productSrv, cartSrv, authService){
			// productSrv.getProducts().then(function(response){
			// 	$scope.products = response;
			// 	console.log(123456, response);
			// })
			$scope.addToCart = function(product){
				// console.log(product);
				cartSrv.addToCart(product);
		  	return product;
		  }

		  productSrv.getProductByCategory("Women").then(function(response){
					$scope.products = response;
					console.log(987, response);
				})

			// $scope.products = productSrv.getAllProducts();
	});
angular.module('protest').directive('loginDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './views/login.html',
    controller: 'loginCtrl'
  };
});


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
angular.module("protest").service("cartSrv", function($http) {

  this.login = function(user) {
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/logout'
    }).then(function(response) {
      return response;
    });
  };

  this.getCurrentUser = function() {
    return $http({
      method: 'GET',
      url: '/me'
    }).then(function(response) {
      return response;
    });
  };

  this.registerUser = function(user) {
    return $http({
      method: 'POST',
      url: '/api/register',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.editUser = function(id, user) {
    return $http({
      method: 'PUT',
      url: "/user/" + id,
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.addToCart = function(product) { console.log(product);
    return $http({
      method: 'PUT',
      url: "/api/cart",
      data: product
    }).then(function(response){
      return response;
    }).catch(function(err){
      alert("Please Log-In");
    })
  }

  this.getCart = function(){
    return $http({
      method: "GET",
      url: "/api/cart",
    }).then(function(response){
      console.log(response);
      return response;

    })

  }

});
angular.module('protest')
	.service('homeSrv', function($http){
		// this.getAllProducts = function(){
		// 	return $http({
		// 		method: "GET",
		// 		url: '/api/products'
		// 	}).then(function(response){
		// 		return response.data;
		// 	})
		// }
	})
angular.module('protest')
	.service('kidsSrv', function($http){
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
angular.module("protest").service("authService", function($http) {

  this.login = function(user) {
    return $http({
      method: 'POST',
      url: '/api/login',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/api/logout'
    }).then(function(response) {
      return response;
    });
  };

  this.getCurrentUser = function() {
    return $http({
      method: 'GET',
      url: '/api/login'
    }).then(function(response) {
      return response;
    });
  };

  this.registerUser = function(user) {
    return $http({
      method: 'POST',
      url: '/api/register',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.editUser = function(id, user) {
    return $http({
      method: 'PUT',
      url: "/api/user/" + id,
      data: user
    }).then(function(response) {
      return response;
    });
  };
});
angular.module('protest')
	.service('menSrv', function($http){
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
angular.module('protest')
	.service('productSrv', function($http, $stateParams){
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

		this.getOneProduct = function(id, product) {
			return $http({
				method: "GET",
				url: "/api/product/" + id,
			}).then(function(response) {
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









angular.module("protest").service("userService", function($http) {

  this.getUsers = function() {
    return $http({
      method: 'GET',
      url: '/user'
    }).then(function(response) {
      return response;
    });
  };

  this.getUser = function(id) {
    return $http({
      method: 'GET',
      url: '/user?_id=' + id
    }).then(function(response) {
      return response;
    });
  };

  // Not Needed
  //
  // this.deleteUser = function(id) {
  //   return $http({
  //     method: 'DELETE',
  //     url: '/user/' + id
  //   }).then(function(response) {
  //     return response;
  //   });
  // };
});
angular.module('protest')
	.service('womenSrv', function($http){
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