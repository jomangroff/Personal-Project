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

  this.removeFromCart = function(cart_id, product_id) {
    return $http({
      method: 'PUT',
      url: "/api/cart/" + cart_id + "/" + product_id,
    }).then(function(response){
      console.log(response);
      return response;
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