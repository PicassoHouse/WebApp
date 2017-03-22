'use strict';

angular.module('picassohouse.dashboard', ['ngRoute'])

.config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/dashboard', {
      templateUrl: 'scripts/dashboard/dashboard.html',
      controller: 'DashboardCtrl'
    });
}])

.controller('DashboardCtrl', ['PHApiService', (PHApiService) => {

    PHApiService.get('/user')
        .then(console.log)
        .catch(console.log);

}]);