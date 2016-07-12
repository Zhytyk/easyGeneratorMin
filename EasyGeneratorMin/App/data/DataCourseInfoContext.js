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

    function addCourse(course) {
        self = this;
        return http.post('post/addCourse', course).then(function (course) {
            self.courses.push(mapCourse(course));
        });
    }

    function removeCourseById(id) {
        return http.get('get/removeCourse', { id: id }).then(function () {
            self.courses = [];
            initializeCourses();
        });
    }

    return {
        initializeCourses: initializeCourses,
        addCourse: addCourse,
        removeCourseById: removeCourseById,
        courses: []
    }
});