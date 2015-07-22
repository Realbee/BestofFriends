var mainRouter = angular.module('mainRouter', ['ngRoute'])

mainRouter.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/our-profiles/:memberId', {
        templateUrl: '../../views/member-profiles.html',
        controller: 'dataController'
      }).
      otherwise({
        redirectTo: '/our-profiles'
      });
  }]);