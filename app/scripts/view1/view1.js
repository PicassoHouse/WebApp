'use strict';

angular.module('picassohouse.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'scripts/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [() => {

  console.log("something");

 }]);