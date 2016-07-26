define(['data/dataContext', 'http/httpWrapper', 'mapping/mapper'], function (dataContext, http, mapper) {

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
                return courses.find(function (course) {
                    return course.id == id;
                });
            });
    };

    function createCourse(title, description) {
        return http.post('create/course', { title: title, description: description })
            .then(function (createdCourse) {
                if (createdCourse.error) {
                    return createdCourse.error;
                }

                dataContext.courses.push(mapper.mapCourse(createdCourse));
            });
    };

    function removeCourse(courseId) {
        return http.post('remove/course', { id: courseId })
            .then(function () {
                var index = dataContext.courses.findIndex(function (course, index) {
                    return course.id === courseId;
                });

                dataContext.courses.splice(index, 1);
            });
    };

    function updateCourse(id, title, description) {
        return http.post('update/course', { id: id, title: title, description: description })
            .then(function (updatedCourse) {
                if (updatedCourse.error) {
                    return updatedCourse.error;
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