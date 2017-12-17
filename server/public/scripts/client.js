var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');

  $routeProvider.when('/', {
      templateUrl: '../views/user.html',
      controller: 'UserController as uc',
    }).when('/projects', {
      templateUrl: '../views/projects.html',
      controller: 'ReposController as rc'
    }).when('/about', {
      templateUrl: '../views/about.html',
      controller: 'AboutController as ac'  
    }).otherwise('/');

  // For removing !# from urls
  $locationProvider.html5Mode(true);
});
