'use strict';


// Declare app level module which depends on filters, controllers, directives and services
// In AngularJS, applications are structured in modules. A module can depend on other modules and
// a module can contain controllers, services, directives and filters.


// the directive 'ngApp' has already bound the main view in index.html to 'habitApp'
angular.module('habitApp', ['habitApp.filters', 'habitApp.services', 'habitApp.directives', 'habitApp.controllers']).

  // here we use dependency injection... in this case the $routeProvider will be injected with the given function.
  // Each route (url path) is configured to callup a controller and and html file.
  // Note we could eliminate the array and the first parameter, but then minification would break this code.
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/habitList', {templateUrl: 'partials/habit-list.html', controller: 'habitListCtrl'});
    $routeProvider.when('/habits/:habitName', {templateUrl: 'partials/habit-detail.html', controller: 'habitDetailCtrl'});
    $routeProvider.otherwise({redirectTo: '/habitList'});
  }]);
