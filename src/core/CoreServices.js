
export default angular.module('core.services', [])
    .config(['$httpProvider', function($httpProvider) {
        let token = localStorage.getItem('token');
        if(token)
            $httpProvider.defaults.headers.common = _.extend($httpProvider.defaults.headers.common, {'Authorization': "Bearer " + token});
    }])
    .factory('Api', ['Restangular', '$cookies', '$http', 'apiUrl', (Restangular, cookies, $http, apiUrl) => {
        return Restangular.withConfig((RestangularConfigurer) => {
            RestangularConfigurer.setBaseUrl(apiUrl);
            RestangularConfigurer.setErrorInterceptor((response, deferred, responseHandler) => {

                if( response.status === 401 || response.status === 403) {
                    $state.go('login.home');
                }

                return true;
            });

            RestangularConfigurer.addResponseInterceptor((data, operation, what, url, response, deferred) => {
                let extractedData = data;

                if(data.error === 0 && data.token) {
                    let token = data.token;

                    localStorage.setItem('token', token);
                    $http.defaults.headers.common = _.extend($http.defaults.headers.common, {'Authorization': token});
                }

                if(response.headers('token-refreshed')) {
                    let token = response.headers('token-refreshed');

                    localStorage.setItem('token', token);
                    $http.defaults.headers.common = _.extend($http.defaults.headers.common, {'Authorization': token});
                }

                return extractedData;
            });

        });
    }]);

