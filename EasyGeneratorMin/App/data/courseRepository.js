define(['data/dataContext', 'http/httpWrapper', 'mapping/mapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, mapper, httpErrorHandlers) {

    function getCourses() {
        return new Promise(function (resolve) {
            resolve(dataContext.courses);
        });
    };

    function getCourseById(id) {
        return new Promise(function (resolve) {
            resolve(dataContext.courses);
        })
            .then(function (courses) {
                var course = courses.find(function (course) {
                    return course.id == id;
                });

                if (course) {
                    return course;
                }
                httpErrorHandlers.dataIsNotFoundHandler();
            });
    };

    function createCourse(title, description) {
        return http.post('create/course', { title: title, description: description })
            .then(function (createdCourse) {
                if (!createdCourse) {
                    return httpErrorHandlers.dataIsNotFoundHandler();
                }
                if (createdCourse.errorStatusCode) {
                    return httpErrorHandlers.handler(createdCourse.errorStatusCode);
                }


                dataContext.courses.push(mapper.mapCourse(createdCourse));
            });
    };

    function removeCourse(courseId) {
        return http.post('remove/course', { id: courseId })
            .then(function (e) {
                if (e.errorStatusCode) {
                    httpErrorHandlers.handler(e.errorStatusCode);
                }

                var index = dataContext.courses.findIndex(function (course, index) {
                    return course.id === courseId;
                });

                dataContext.courses.splice(index, 1);
            });
    };

    function updateCourse(id, title, description) {
        return http.post('update/course', { id: id, title: title, description: description })
            .then(function (updatedCourse) {
                if (!updatedCourse) {
                    return httpErrorHandlers.dataIsNotFoundHandler();
                }
                if (updatedCourse.errorStatusCode) {
                    return httpErrorHandlers.handler(updatedCourse.errorStatusCode);
                }


                var index = dataContext.courses.findIndex(function (course) {
                    return course.id === updatedCourse.Id;
                });
                dataContext.courses[index] = mapper.mapCourse(updatedCourse);
            });
    };

    return {
        getCourses: getCourses,
        getCourseById: getCourseById,
        createCourse: createCourse,
        removeCourse: removeCourse,
        updateCourse: updateCourse
    };
});