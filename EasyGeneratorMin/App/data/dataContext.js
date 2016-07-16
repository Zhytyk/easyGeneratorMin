define(['http/httpWrapper', 'mapping/mapModel'], function (http, mapModel) {

    function initializeCourses() {
        self = this;
        return http.post('post/getCourses').then(function (data) {
            data.forEach(function (course) {
               self.courses.push(mapModel.mapCourse(course));
            });
        });
    }

    return {
        initializeCourses: initializeCourses,
        courses: []
    }
});