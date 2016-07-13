define(['data/dataCourseInfoContext', 'models/course', 'http/httpWrapper'], function (dataCourseInfoContext, Course, http) {

    function mapCourse(course) {
        return new Course(course);
    }

    function initializeCourses() {
        return http.post('post/getCourses').then(function (data) {
            data.forEach(function (course) {
                dataCourseInfoContext.courses.push(mapCourse(course));
            });
        });
    }

    function addCourse(course) {
        return http.post('post/addCourse', course).then(function (course) {
            dataCourseInfoContext.courses.push(mapCourse(course));
        });
    }

    function removeCourseById(id) {
        dataCourseInfoContext.courses.forEach(function (course, index) {
            if (course.id === id) {
                dataCourseInfoContext.courses.splice(index, 1);
            }
        });
        return http.get('get/removeCourse', { id: id });
    }

    function editCourse(course) {
        return http.post('post/editCourse', course).then(function (modifiedCourse) {
            dataCourseInfoContext.courses.forEach(function (course, index) {
                dataCourseInfoContext.courses[index] = course.id === modifiedCourse.Id ? mapCourse(modifiedCourse) : course;
            });
        });
    }
    return {
        initializeCourses: initializeCourses,
        addCourse: addCourse,
        removeCourseById: removeCourseById,
        editCourse: editCourse,
    }
})