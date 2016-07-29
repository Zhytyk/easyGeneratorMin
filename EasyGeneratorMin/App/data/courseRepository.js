define(['data/dataContext', 'http/httpWrapper', 'mapping/mapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, mapper, httpErrorHandlers) {

    function getCourses() {
        return new Promise(function (resolve) {
            resolve(dataContext.courses);
        });
    };

    function getCourseById(id) {
        return new Promise(function (resolve) {
            var course = dataContext.courses.find(function (course) {
                return course.id == id;
            });

            if (course) {
                resolve(course);
                return;
            }
            throw httpErrorHandlers.dataIsNotFoundHandler();
        });
    };

    function createCourse(title, description) {
        return http.post('create/course', { title: title, description: description })
            .then(function (createdCourse) {
                if (!createdCourse) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                    return;
                }
                if (createdCourse.errorStatusCode) {
                    throw httpErrorHandlers.handler(createdCourse.errorStatusCode);
                    return;
                }


                dataContext.courses.push(mapper.mapCourse(createdCourse));
            });
    };

    function removeCourse(courseId) {
        return http.post('remove/course', { id: courseId })
            .then(function (e) {
                if (e.errorStatusCode) {
                    throw httpErrorHandlers.handler(e.errorStatusCode);
                    return;
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
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                    return;
                }
                if (updatedCourse.errorStatusCode) {
                    throw httpErrorHandlers.handler(updatedCourse.errorStatusCode);
                    return;
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