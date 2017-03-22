
angular.module('picassohouse')

.service('PHApiService', ["$http", "$q", 'apiUrl', ($http, $q, apiUrl) => {

    let BASE_URL = apiUrl;

    const get = (url, id) => {
        let deferred = $q.defer();

        //buscar todos ou apenas o ID
        url = id ? [url,id].join('/') : url;

        $http.get(BASE_URL + url)
            .then((res) => deferred.resolve(res.data), (err) => deferred.reject(err));

        return deferred.promise;
    };

    const del = (url, id, params) => {
        let deferred = $q.defer();

        $http.delete([BASE_URL, url, id].join('/'), { params })
            .then((res) => deferred.resolve(res.data), (err) => deferred.reject(err));

        return deferred.promise;
    };

    const post = (url, obj) => {
        let deferred = $q.defer();

        $http.post(BASE_URL + url, obj)
            .then((res) => deferred.resolve(res.data), (err) => deferred.reject(err));

        return deferred.promise;
    };

    const put = (url, obj) => {
        let deferred = $q.defer();

        $http.put(BASE_URL + url, obj)
            .then((res) => deferred.resolve(res.data), (err) => deferred.reject(err));

        return deferred.promise;
    };

    return { get, del, post, put }
}]);