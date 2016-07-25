define(['http/httpWrapper', 'mapping/mapper'], function (http, mapper) {

    function initialize() {
        var self = this;
        return http.get('get/courses').then(function (courses) {
            courses.forEach(function (course) {
                self.courses.push(mapper.mapCourse(course));
            });
        });
    };

    return {
        initialize: initialize,
        courses: [],
    };
});