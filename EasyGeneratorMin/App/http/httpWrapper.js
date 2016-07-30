define(['plugins/http'], function (http) {

    function get(url) {
        return http.get(url);
    }

    function post(url, data) {
        return http.post(url, data);
    }

    function put(url, data) {
        return http.put(url, data);
    }

    function remove(url, data) {
        return http.remove(url, data);
    }

    return {
        get: get,
        post: post,
        put: put,
        remove: remove
    };
});