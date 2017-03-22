'use strict';

// Declare app level module which depends on views, and components
angular.module('picassohouse', [
  'ngRoute',
  'picassohouse.dashboard'
])

//Constants
.constant('apiUrl', 'http://localhost:3000/api')
.constant('locale', 'pt_BR')

.config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
