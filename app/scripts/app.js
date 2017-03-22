'use strict';

// Declare app level module which depends on views, and components
angular.module('picassohouse', [
  'ngRoute',
  'picassohouse.view1',
  'picassohouse.view2'
]).
config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
