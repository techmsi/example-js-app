'use strict';

var routing = function ($routeProvider,$locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl:'features/home/home.html'
  })
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
}

routing.$inject = ['$routeProvider','$locationProvider'];
export default routing;
