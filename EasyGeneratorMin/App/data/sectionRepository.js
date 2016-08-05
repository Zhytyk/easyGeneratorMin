define(['data/dataContext', 'http/httpWrapper', 'mapping/modelMapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, modelMapper, httpErrorHandlers) {

    function getSectionById(courseId, sectionId) {
        return new Promise(function (resolve) {
            var course = dataContext.courses.find(function (course) {
                return course.id == courseId;
            });
            var section = course.sections.find(function (section) {
                return section.id = sectionId;
            });

            if (!section) {
                throw httpErrorHandlers.dataIsNotFoundHandler();
            }

            resolve(section);
            
        })
    };

    function createSection(courseId, title) {
        return http.post('create/section', { id: courseId, title: title })
            .then(function (createdSection) {
                if (!createdSection) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                }


                var course = dataContext.courses.find(function (course) {
                    return course.id === courseId;
                });

                course.sections.push(modelMapper.mapSection(createdSection));
            });
    };

    function removeSection(sectionId, courseId) {
        return http.remove('remove/section', { id: sectionId })
            .then(function () {


                var course = dataContext.courses.find(function (course) {
                    return courseId == course.id;
                });
                var indexSection = course.sections.findIndex(function (section) {
                    return sectionId == section.id;
                });

                course.sections.splice(indexSection, 1);
            });
    };

    function updateSection(sectionId, courseId, title) {
        return http.put('update/section', { id: sectionId, title: title })
            .then(function (updatedSection) {
                if (!updatedSection) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                }


                var course = dataContext.courses.find(function (course) {
                    return courseId == course.id;
                });
                var section = course.sections.find(function (section) {
                    return sectionId == section.id;
                });

                section.title = updatedSection.Title;
                section.lastUpdatedDate = new Date(updatedSection.LastUpdatedDate).toLocaleString();
            });
    };

    return {
        getSectionById: getSectionById,
        createSection: createSection,
        removeSection: removeSection,
        updateSection: updateSection
    };
});