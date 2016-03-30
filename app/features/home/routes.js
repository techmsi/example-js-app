'use strict';

routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'features/home/home.html',
    }).otherwise({
      redirectTo: '/'
    });
}
