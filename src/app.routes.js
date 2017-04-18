export const AppRoutes = ($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                'app': {
                    templateUrl: './src/views/app.html'
                },
                'login': {}
            }
        })
        .state('login', {
            abstract: true,
            views: {
                'app': {},
                'login': {
                    templateUrl: './src/views/login.html'
                }
            }
        });
};


export const AuthMiddleware = ($rootScope, $state, $urlRouter) => {
    "ngInject";

    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
        if (toState.name != 'login.home' && !localStorage.getItem('token')) {
            event.preventDefault();
            return $state.go('login.home');
        }
    });

    $rootScope.authLogout = () => {
        localStorage.removeItem('token');
        $state.go('login.home');
    };
};