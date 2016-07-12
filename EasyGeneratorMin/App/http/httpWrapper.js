define(['plugins/http'], function (http) {

    function post(url, data) {
        return http.post(url, data).fail(function () {
            alert('Post Request failed :(');
        });
    }

    function get(url, data) {
        return http.get(url, data).fail(function () {
            alert('Get Request failed :(');
        });
    }

    return {
        post: post,
        get: get
    };
});