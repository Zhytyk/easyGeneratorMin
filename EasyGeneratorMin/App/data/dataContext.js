define(['http/httpWrapper', 'mapping/mapModel'], function (http, mapModel) {

    function initializeCourses() {
        var self = this;
        return http.get('get/courses').then(function (data) {
            data.forEach(function (course) {
               self.courses.push(mapModel.mapCourse(course));
            });
        });
    }

    return {
        initializeCourses: initializeCourses,
        courses: []
    };
});