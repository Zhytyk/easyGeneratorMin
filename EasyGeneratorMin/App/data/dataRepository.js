define(['data/dataContext', 'http/httpWrapper', 'mapping/mapModel'], function (dataContext, http, mapModel) {

    function getCourses() {
        if (!dataContext.courses) {
            dataContext.initializeCourses();
        }
        return dataContext.courses;
    }

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

    function editCourse(course) {
        return http.post('post/editCourse', course).then(function (modifiedCourse) {
            dataContext.courses.forEach(function (course, index) {
                dataContext.courses[index] = course.id === modifiedCourse.Id ? mapModel.mapCourse(modifiedCourse) : course;
            });
        });
    }
    return {
        getCourses: getCourses,
        addCourse: addCourse,
        removeCourse: removeCourse,
        editCourse: editCourse,
    }
})