define(['data/dataContext', 'http/httpWrapper', 'mapping/mapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, mapper, httpErrorHandlers) {

    function getSectionById(courseId, sectionId) {
        return new Promise(function (resolve) {
            var course = dataContext.courses.find(function (course) {
                return course.id == courseId;
            });
            var section = course.sections.find(function (section) {
                return section.id = sectionId;
            });

            if (section) {
                resolve(section);
            }
            throw httpErrorHandlers.dataIsNotFoundHandler();
        })
    };

    function createSection(courseId, title) {
        return http.post('create/section', { id: courseId, title: title })
            .then(function (createdSection) {
                if (!createdSection) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                    return;
                }
                if (createdSection.errorStatusCode) {
                    throw httpErrorHandlers.handler(createdSection.errorStatusCode);
                    return;
                }


                var index = dataContext.courses.findIndex(function (course) {
                    return course.id === courseId;
                });
                dataContext.courses[index].sections.push(mapper.mapSection(createdSection));
            });
    };

    function removeSection(sectionId, courseId) {
        return http.post('remove/section', { id: sectionId })
            .then(function (e) {
                if (e.errorStatusCode) {
                    throw httpErrorHandlers.handler(e.errorStatusCode);
                    return;
                }


                var indexCourse = dataContext.courses.findIndex(function (course) {
                    return courseId == course.id;
                });
                var indexSection = dataContext.courses[indexCourse].sections.findIndex(function (section) {
                    return sectionId == section.Id;
                });

                dataContext.courses[indexCourse].sections.splice(indexSection, 1);
            });
    };

    function updateSection(sectionId, courseId, title) {
        return http.post('update/section', { id: sectionId, title: title })
            .then(function (updatedSection) {
                if (!updatedSection) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                    return;
                }
                if (updatedSection.errorStatusCode) {
                    throw httpErrorHandlers.handler(updatedSection.errorStatusCode);
                    return;
                }


                var indexCourse = dataContext.courses.findIndex(function (course) {
                    return courseId == course.id;
                });
                var indexSection = dataContext.courses[indexCourse].sections.findIndex(function (section) {
                    return sectionId == section.id;
                });
                dataContext.courses[indexCourse].sections[indexSection] = mapper.mapSection(updatedSection);
            });
    };

    return {
        getSectionById: getSectionById,
        createSection: createSection,
        removeSection: removeSection,
        updateSection: updateSection
    };
});