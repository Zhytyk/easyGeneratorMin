define(['data/dataContext', 'http/httpWrapper', 'mapping/modelMapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, modelMapper, httpErrorHandlers) {

    function getCourses() {
        return Q.fcall(function () {
            return dataContext.courses
        });
    };

    function getCourseById(id) {
        return Q.fcall(function () {
            var course = dataContext.courses.find(function (course) {
                return course.id == id;
            });

            if (!course) {
                throw httpErrorHandlers.dataIsNotFoundHandler();
            }
            return course;
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
                var index = _.findIndex(dataContext.courses, function (course) {
                    return course.id == courseId ;
                });

                dataContext.courses.splice(index, 1);
            });
    };

    function updateCourse(id, title, description) {
        return http.put('update/course', { id: id, title: title, description: description })
            .then(function (updatedCourse) {
                if (!updatedCourse) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                }


                var course = _.find(dataContext.courses, function (course) {
                    return course.id === updatedCourse.Id;
                });

                course.title = updatedCourse.Title;
                course.description = updatedCourse.Description;
                course.lastUpdatedDate = new Date(updatedCourse.LastUpdatedDate);
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