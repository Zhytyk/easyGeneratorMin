define(['plugins/router','models/course', 'http/httpWrapper'], function (router, Course, http) {

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
            router.navigate("#");
        });
    }

    function removeCourseById(id) {
        self = this;
        this.courses.forEach(function (course, index) {
            if (course.id === id) {
                self.courses.splice(index, 1);
            }
        });
        return http.get('get/removeCourse', { id: id });
    }

    return {
        initializeCourses: initializeCourses,
        addCourse: addCourse,
        removeCourseById: removeCourseById,
        courses: []
    }
});