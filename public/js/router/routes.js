var mainRouter = angular.module('mainRouter', ['ngRoute']);

mainRouter.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/diaries', {
      templateUrl: '../../views/diarypage.html',
      controller: 'diaryController'
    }).
    otherwise({
      redirectTo: '/../../views/diarypage.html/#personal-diaries'
    });
  }
]);

