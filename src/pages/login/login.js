
import LoginController from './login.controller.js'


export default angular.module('login', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('login.home', {
                url: '/login',
                templateUrl: './src/pages/login/login.html',
                controller: 'LoginController as $ctrl'
            });
    }])
    .controller('LoginController', LoginController);