define(['durandal/app', 'plugins/router', 'data/dataContext', 'data/courseRepository', 'data/sectionRepository'], function (app, router, dataContext, courseRepository, sectionRepository) {
    return {
        courses: ko.observableArray([]),
        activate: function () {
            this.courses(dataContext.courses);
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
                .then(function () {
                    self.courses.valueHasMutated();
            });
        },
        removeSection: function (sectionId, courseId) {
            var self = this;
            sectionRepository.removeSection(sectionId, courseId)
                .then(function () {
                    self.courses([]);
                    self.courses(dataContext.courses);
                });
        },
    };
})