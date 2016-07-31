define(['durandal/app', 'plugins/router', 'data/dataContext', 'data/courseRepository', 'data/sectionRepository', 'mapping/viewMapper'], function (app, router, dataContext, courseRepository, sectionRepository, viewMapper) {
    return {
        courses: ko.observableArray([]),
        activate: function () {
            this.courses(viewMapper.coursesMapper());
        },
        createCourse: function () {
            router.navigate("#createCourse");
        },
        updateCourse: function (id) {
            router.navigate("#updateCourse/" + id);
        },
        updateSection: function(sectionId, courseId) {
            router.navigate("#updateSection/" + courseId + "/" + sectionId);
        },
        removeCourse: function (id) {
            var self = this;
            courseRepository.removeCourse(id)
                .then(function (index) {
                    self.courses.splice(index, 1);
                });
        },
        removeSection: function (sectionId, courseId) {
            var self = this;
            sectionRepository.removeSection(sectionId, courseId)
                .then(function (indexes) {
                    self.courses()[indexes.indexCourse].sections.splice(indexes.indexSection, 1);
                });
        },
    };
})