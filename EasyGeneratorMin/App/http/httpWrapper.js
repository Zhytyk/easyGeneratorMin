define(['plugins/http'], function (http) {

    function get(url, data) {
        return http.get(url, data).fail(function () {
            alert('Get Request failed :(');
        });
    }

    return {
        get: get
    };
});