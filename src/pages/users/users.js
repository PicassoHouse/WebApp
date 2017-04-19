
import UsersController from './users.controller.js'


export default angular.module('users', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.users', {
                url: '/users',
                templateUrl: './src/pages/users/users.html',
                controller: 'UsersController as $ctrl'
            });
    }])
    .controller('UsersController', UsersController);