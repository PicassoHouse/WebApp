import angular from 'angular'
import angularAnimate from 'angular-animate'
import angularAria from 'angular-aria'
import toastr from 'angular-toastr'
import uiBootstrap from 'angular-ui-bootstrap'

import uiRouter from 'angular-ui-router'
import angularCookies from 'angular-cookies'
import Restangular from 'restangular'

//Modules
import {AppRoutes, AuthMiddleware} from './app.routes.js'
import CoreServices from './core/CoreServices.js'

import Login from './pages/login/login.js'
import Dashboard from './pages/dashboard/dashboard.js'
import Users from './pages/users/users.js'
import AccessHistory from './pages/accesshistory/accesshistory.js'

import lodash from 'lodash'

global._ = lodash;

export default angular
    .module('picassohouse', [
        uiRouter,
        uiBootstrap,
        angularCookies,
        Restangular,
        angularAnimate,
        angularAria,
        toastr,
        CoreServices.name,
        Login.name,
        Dashboard.name,
        Users.name,
        AccessHistory.name
    ])
    .constant('apiUrl', 'http://localhost:3000/api')
    .constant('locale', 'pt_BR')
    .config(AppRoutes)
    .run(AuthMiddleware);

angular.bootstrap(document, ['picassohouse']);
