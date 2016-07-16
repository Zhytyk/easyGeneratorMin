define(['data/dataContext', 'http/httpWrapper', 'mapping/mapModel'], function (dataContext, http, mapModel) {

    function getCourses() {
        if (!dataContext.courses) {
            dataContext.initializeCourses();
        }
        return dataContext.courses;
    }

    function getCourseById(id) {
        return getCourses().filter(function (course) {
            return course.id == id
        })[0];
    };

    function addCourse(course) {
         return http.post('post/addCourse', course).then(function (course) {
            dataContext.courses.push(mapModel.mapCourse(course));
        });
    }

    function removeCourse(id) {   
        return http.get('get/removeCourse', { id: id }).then(function () {
            removeCourseFromContext(id);
        });
    }

    function removeCourseFromContext(id) {
        dataContext.courses.forEach(function (course, index) {
            if (course.id === id) {
                dataContext.courses.splice(index, 1);
            }
        });
    }

    function updateCourse(course) {
        return http.post('post/updateCourse', course).then(function (updatedCourse) {
            dataContext.courses.forEach(function (course, index) {
                dataContext.courses[index] = course.id === updatedCourse.Id ? mapModel.mapCourse(updatedCourse) : course;
            });
        });
    }

    return {
        getCourses: getCourses,
        getCourseById: getCourseById,
        addCourse: addCourse,
        removeCourse: removeCourse,
        updateCourse: updateCourse,
    }
})