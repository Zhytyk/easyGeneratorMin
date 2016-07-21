define(['data/dataContext', 'http/httpWrapper', 'mapping/mapModel'], function (dataContext, http, mapModel) {

    function getCourses() {
        return new Promise(function (resolve) {
            resolve(dataContext.courses);
        });
    }

    function getCourseById(id) {
        return getCourses().then(function (courses) {
            return courses.find(function (course) {
                return course.id == id;
            });
        });
    };

    function createCourse(title, description) {
        return http.post('create/course', { title: title, description: description })
            .then(function (createdCourse) {
                if (createdCourse.error == undefined)
                    dataContext.courses.push(mapModel.mapCourse(createdCourse));
                else return createdCourse.error;
        });
    }

    function removeCourse(id) {   
        return http.post('remove/course', { id: id })
            .then(function () {
                removeCourseFromContext(id);
            });
    }

    function removeCourseFromContext(id) {
        dataContext.courses.forEach(function (course, index) {
            if (course.id === id) 
                dataContext.courses.splice(index, 1);
        });
    }

    function updateCourse(id, title, description) {
        return http.post('update/course', {id: id, title: title, description: description})
            .then(function (updatedCourse) {
                if (updatedCourse.error == undefined) {
                    dataContext.courses.forEach(function (course, index) {
                        dataContext.courses[index] = course.id === updatedCourse.Id ? mapModel.mapCourse(updatedCourse) : course;
                    });
                }
                else return updatedCourse.error;
        });
    }

    return {
        getCourses: getCourses,
        getCourseById: getCourseById,
        createCourse: createCourse,
        removeCourse: removeCourse,
        updateCourse: updateCourse,
    };
})