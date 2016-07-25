define(['data/dataContext', 'http/httpWrapper', 'mapping/mapper'], function (dataContext, http, mapper) {

    function getCourses() {
        return new Promise(function (resolve) {
            resolve(dataContext.courses);
        });
    };

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
                    dataContext.courses.push(mapper.mapCourse(createdCourse));
                else return createdCourse.error;
            });
    };

    function removeCourse(id) {
        return http.post('remove/course', { id: id })
            .then(function () {
                removeCourseFromContext(id);
            });
    };

    function removeCourseFromContext(id) {
        dataContext.courses.forEach(function (course, index) {
            if (course.id === id)
                dataContext.courses.splice(index, 1);
        });
    };

    function updateCourse(id, title, description) {
        return http.post('update/course', { id: id, title: title, description: description })
            .then(function (updatedCourse) {
                if (updatedCourse.error !== undefined)
                    return updatedCourse.error;

                var index = dataContext.courses.findIndex(function (course) {
                    return course.id === updatedCourse.Id;
                });

                dataContext.courses[index] = mapper.mapCourse(updatedCourse);
        });
    };

    function createSection(courseId, title) {
        return http.post('create/section', { courseId: courseId, title: title })
            .then(function (createdSection) {
                if (createdSection.error == undefined)
                    dataContext.courses.forEach(function (course) {
                        if(course.id === courseId)
                            course.sections.push(mapper.mapSection(createdSection));
                    })
                else return createdSection.error;
        });
    };

    function removeSection(id) {
        return http.post('remove/section', { id: id })
            .then(function () {
                removeSectionFromContext(id);
            });
    };

    function removeSectionFromContext(id) {
        dataContext.courses.forEach(function (course, index) {
            course.sections.forEach(function (section, i) {
                if (section.id === id) {
                    dataContext.courses[index].sections.splice(i, 1);
                }
            }); 
        });
    };

    function updateSection(sectionId, title) {
        return http.post('update/section', { id: sectionId, title: title})
            .then(function (updatedSection) {

                if (updatedSection.error !== undefined)
                    return updatedCourse.error;

                dataContext.courses.forEach(function (course, index) {
                     var i = course.sections.findIndex(function (section) {
                        return section.id === updatedSection.Id;
                     });
                     if (i >= 0) {
                         dataContext.courses[index].sections[i] = mapper.mapSection(updatedSection);
                         console.log(dataContext.courses);
                     }
                });

            });
    };

    return {
        getCourses: getCourses,
        getCourseById: getCourseById,
        createCourse: createCourse,
        removeCourse: removeCourse,
        updateCourse: updateCourse,
        createSection: createSection,
        removeSection: removeSection,
        updateSection: updateSection
    };
})