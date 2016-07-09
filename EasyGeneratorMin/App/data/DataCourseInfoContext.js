define(['models/course', 'http/httpWrapper'], function (Course, http) {

    function mapCourse(course) {
        return new Course(course);
    }

    function initializeCourses() {
        var self = this;
        return http.post('post/getCourses').then(function (data) {
            data.forEach(function (course) {
                self.courses.push(mapCourse(course));
            });
        });
    }

    return {
        initializeCourses: initializeCourses,
        courses: []
    }
});