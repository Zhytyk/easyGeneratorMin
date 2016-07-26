define(['data/dataContext', 'http/httpWrapper', 'mapping/mapper'], function (dataContext, http, mapper) {

    function createSection(courseId, title) {
        return http.post('create/section', { courseId: courseId, title: title })
            .then(function (createdSection) {
                if (createdSection.error) {
                    return createdSection.error;
                }

                var index = dataContext.courses.findIndex(function (course) {
                    return course.id === courseId;
                })

                dataContext.courses[index].sections.push(mapper.mapSection(createdSection));
            });
    };

    function removeSection(sectionId, courseId) {
        return http.post('remove/section', { id: sectionId })
            .then(function () {
                var indexCourse = dataContext.courses.findIndex(function (course) {
                    return courseId == course.id;
                })

                var indexSection = dataContext.courses[indexCourse].sections.findIndex(function (section) {
                    return sectionId == section.Id;
                })

                dataContext.courses[indexCourse].sections.splice(indexSection, 1);

            });
    };

    function updateSection(sectionId, courseId, title) {
        return http.post('update/section', { id: sectionId, title: title })
            .then(function (updatedSection) {
                if (updatedSection.error) {
                    return updatedCourse.error;
                }
                var indexCourse = dataContext.courses.findIndex(function (course) {
                    return courseId == course.id;
                })

                var indexSection = dataContext.courses[indexCourse].sections.findIndex(function (section) {
                    return sectionId == section.id;
                })

                dataContext.courses[indexCourse].sections[indexSection] = mapper.mapSection(updatedSection);

            });
    };

    return {
        createSection: createSection,
        removeSection: removeSection,
        updateSection: updateSection
    };
});