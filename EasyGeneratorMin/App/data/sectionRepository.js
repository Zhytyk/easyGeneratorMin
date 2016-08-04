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
                return;
            }

            resolve(section);
            
        })
    };

    function createSection(courseId, title) {
        return http.post('create/section', { id: courseId, title: title })
            .then(function (createdSection) {
                if (!createdSection) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                    return;
                }


                var index = dataContext.courses.findIndex(function (course) {
                    return course.id === courseId;
                });
                dataContext.courses[index].sections.push(modelMapper.mapSection(createdSection));
            });
    };

    function removeSection(sectionId, courseId) {
        return http.remove('remove/section', { id: sectionId })
            .then(function () {


                var indexCourse = dataContext.courses.findIndex(function (course) {
                    return courseId == course.id;
                });
                var indexSection = dataContext.courses[indexCourse].sections.findIndex(function (section) {
                    return sectionId == section.id;
                });

                dataContext.courses[indexCourse].sections.splice(indexSection, 1);

                return {
                    indexCourse: indexCourse,
                    indexSection: indexSection
                }
            });
    };

    function updateSection(sectionId, courseId, title) {
        return http.put('update/section', { id: sectionId, title: title })
            .then(function (updatedSection) {
                if (!updatedSection) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                    return;
                }


                var indexCourse = dataContext.courses.findIndex(function (course) {
                    return courseId == course.id;
                });
                var indexSection = dataContext.courses[indexCourse].sections.findIndex(function (section) {
                    return sectionId == section.id;
                });

                dataContext.courses[indexCourse].sections[indexSection].title = updatedSection.Title;
                dataContext.courses[indexCourse].sections[indexSection].lastUpdatedDate = new Date(updatedSection.LastUpdatedDate).toLocaleString();
            });
    };

    return {
        getSectionById: getSectionById,
        createSection: createSection,
        removeSection: removeSection,
        updateSection: updateSection
    };
});