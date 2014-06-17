'use strict';


// Declare app level module which depends on filters, and services
angular.module('calendar', [
  'ngRoute',
  'calendar.filters',
  'calendar.services',
  'calendar.directives',
  'calendar.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: 'CalendarController'});
  $routeProvider.when('/2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
