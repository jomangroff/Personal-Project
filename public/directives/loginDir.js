angular.module('protest').directive('loginDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './views/login.html',
    controller: 'loginCtrl'
  };
});

