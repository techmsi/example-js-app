'use strict';

var config = function ($routeProvider, $httpProvider) {
  // $httpProvider.defaults.useXDomain = true; //cors
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $routeProvider
  .when('/assist', {
    controller: 'AssistFormController',
    controllerAs: 'ctrl',
    templateUrl:'features/assist/form.html'
  })
  .when('/success', {
    templateUrl:'/features/assist/success.html'
  })
  .when('/error', {
    templateUrl:'features/assist/error.html',
  })
  .otherwise({
    redirectTo: '/'
  });

}
config.$inject = ['$routeProvider','$httpProvider'];
export default config;
