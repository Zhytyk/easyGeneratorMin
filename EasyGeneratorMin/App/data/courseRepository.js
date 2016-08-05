define(['data/dataContext', 'http/httpWrapper', 'mapping/modelMapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, modelMapper, httpErrorHandlers) {

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

            if (!course) {
                throw httpErrorHandlers.dataIsNotFoundHandler();
            }
            resolve(course);
        });
    };

    function createCourse(title, description) {
        return http.post('create/course', { title: title, description: description })
            .then(function (createdCourse) {
                if (!createdCourse) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                }


                dataContext.courses.push(modelMapper.mapCourse(createdCourse));
            });
    };

    function removeCourse(courseId) {
        return http.remove('remove/course', { id: courseId })
            .then(function () {
                var index = dataContext.courses.findIndex(function (course, index) {
                    return course.id == courseId;
                });

                dataContext.courses.splice(index, 1);

                return index;
            });
    };

    function updateCourse(id, title, description) {
        return http.put('update/course', { id: id, title: title, description: description })
            .then(function (updatedCourse) {
                if (!updatedCourse) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                }


                var course = dataContext.courses.find(function (course) {
                    return course.id === updatedCourse.Id;
                });

                course.title = updatedCourse.Title;
                course.lastUpdatedDate = new Date(updatedCourse.LastUpdatedDate).toLocaleString();
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