
import DashboardController from './dashboard.controller.js'


export default angular.module('dashboard', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: './src/pages/dashboard/dashboard.html',
                controller: 'DashboardController as $ctrl'
            });
    }])
    .controller('DashboardController', DashboardController);