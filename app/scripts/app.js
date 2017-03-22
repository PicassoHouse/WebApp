'use strict';

// Declare app level module which depends on views, and components
angular.module('picassohouse', [
  'ngRoute',
  'picassohouse.dashboard'
]).
config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
