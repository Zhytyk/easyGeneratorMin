define(['http/httpWrapper', 'mapping/modelMapper'], function (http, modelMapper) {

    function initialize() {
        var self = this;
        return http.get('/get/courses').then(function (courses) {
            courses.forEach(function (course) {
                self.courses.push(modelMapper.mapCourse(course));
            });
        });
    };

    return {
        initialize: initialize,
        courses: []
    };
});