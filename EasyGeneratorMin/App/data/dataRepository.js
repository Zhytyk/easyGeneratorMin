define(['data/dataContext', 'http/httpWrapper', 'mapping/mapModel'], function (dataContext, http, mapModel) {

    function addCourse(course) {
        return http.post('post/addCourse', course).then(function (course) {
            dataContext.courses.push(mapModel.mapCourse(course));
        });
    }

    function removeCourseById(id) {
        dataContext.courses.forEach(function (course, index) {
            if (course.id === id) {
                dataContext.courses.splice(index, 1);
            }
        });
        return http.get('get/removeCourse', { id: id });
    }

    function editCourse(course) {
        return http.post('post/editCourse', course).then(function (modifiedCourse) {
            dataContext.courses.forEach(function (course, index) {
                dataContext.courses[index] = course.id === modifiedCourse.Id ? mapModel.mapCourse(modifiedCourse) : course;
            });
        });
    }
    return {
        addCourse: addCourse,
        removeCourseById: removeCourseById,
        editCourse: editCourse,
    }
})