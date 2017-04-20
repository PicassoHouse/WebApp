
import LightsInfoController from './lightsinfo.controller.js'

export default angular.module('lightsinfo', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.lightsinfo', {
                url: '/lightsinfo',
                templateUrl: './src/pages/lightsinfo/lightsinfo.html',
                controller: 'LightsInfoController as $ctrl'
            });
    }])
    .controller('LightsInfoController', LightsInfoController);