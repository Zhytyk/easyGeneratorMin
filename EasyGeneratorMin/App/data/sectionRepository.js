﻿define(['data/dataContext', 'http/httpWrapper', 'mapping/mapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, mapper, httpErrorHandlers) {

    function getSectionById(courseId, sectionId) {
        return new Promise(function (resolve) {
            resolve(dataContext.courses);
        })
            .then(function (courses) {
                var course = courses.find(function (course) {
                    return course.id == courseId;
                });

                return course.sections.find(function (section) {
                    return section.id = sectionId;
                });
            });
    };

    function createSection(courseId, title) {
        return http.post('create/section', { id: courseId, title: title })
            .then(function (createdSection) {
                if (!createdSection) {
                    return httpErrorHandlers.dataIsNotFoundHandler();
                }
                if (createdSection.error) {
                    return httpErrorHandlers.invalidDataHandler(createdSection.error);
                }


                var index = dataContext.courses.findIndex(function (course) {
                    return course.id === courseId;
                });
                dataContext.courses[index].sections.push(mapper.mapSection(createdSection));
            });
    };

    function removeSection(sectionId, courseId) {
        return http.post('remove/section', { id: sectionId })
            .then(function () {
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
                    return httpErrorHandlers.dataIsNotFoundHandler();
                }
                if (updatedSection.error) {
                    return httpErrorHandlers.invalidDataHandler(updatedSection.error);
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