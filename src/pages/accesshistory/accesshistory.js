
import AccessHistoryController from './accesshistory.controller.js'


export default angular.module('accesshistory', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.accesshistory', {
                url: '/accesshistory',
                templateUrl: './src/pages/accesshistory/accesshistory.html',
                controller: 'AccessHistoryController as $ctrl'
            });
    }])
    .controller('AccessHistoryController', AccessHistoryController);