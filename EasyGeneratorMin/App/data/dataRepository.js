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

    function createCourse(title, description) {
        return http.get('get/createCourse', { title: title, description: description })
            .then(function (createdCourse) {
            dataContext.courses.push(mapModel.mapCourse(createdCourse));
        });
    }

    function removeCourse(id) {   
        return http.get('get/removeCourse', { id: id })
            .then(function () {
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

    function updateCourse(id, title, description) {
        return http.get('get/updateCourse', {id: id, title: title, description: description})
            .then(function (updatedCourse) {
                dataContext.courses.forEach(function (course, index) {
                    dataContext.courses[index] = course.id === updatedCourse.Id ? mapModel.mapCourse(updatedCourse) : course;
            });
        });
    }

    return {
        getCourses: getCourses,
        getCourseById: getCourseById,
        createCourse: createCourse,
        removeCourse: removeCourse,
        updateCourse: updateCourse,
    }
})