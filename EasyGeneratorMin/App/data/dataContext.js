define(['http/httpWrapper', 'mapping/modelMapper'], function (http, modelMapper) {

    function initializeCourses() {
        var self = this;
        return http.get('/get/courses').then(function (courses) {
            courses.forEach(function (course) {
                self.courses.push(modelMapper.mapCourse(course));
            });
        });
    };

    return {
        initializeCourses: initializeCourses,

        courses: [],
        singleSelectQuestions: undefined,
        multipleSelectQuestions: undefined
    };
});