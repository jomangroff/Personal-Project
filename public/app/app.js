angular.module('protest', ['ui.router', 'slickCarousel'])
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
		.state('admin', {
			url: '/admin',
			templateUrl: './views/admin.html',
			controller: 'productCtrl',
			resolve: {
        user: function(authService, $state) {
          return authService.getCurrentUser().then(function(response) {
            if (response.data === null  || response.data.admin === false)
              $state.go('login');
            return response.data;
          }).catch(function(err) {
            $state.go('login');
          });
        }
      }
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