define(['plugins/http'], function (http) {

    function get(url) {
        return http.get(url).fail(function (e) {
            console.log(e);
            alert('Get Request failed :(');
        });
    }

    function post(url, data) {
        return http.post(url, data).fail(function (e) {
            console.log(e);
            alert('Post Request failed :(');
        });
    }

    return {
        get: get,
        post: post
    };
});