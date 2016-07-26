define(['durandal/app', 'plugins/router', 'data/dataContext', 'data/dataRepository'], function (app, router, dataContext, dataRepository) {
    return {
        courses: ko.observableArray([]),
        activate: function () {
            this.courses(dataContext.courses);
        },
        createCourse: function () {
            router.navigate("#create");
        },
        updateCourse: function (id) {
            router.navigate("#update/" + id);
        },
        updateSection: function(sectionId, courseId) {
            router.navigate("#updateSection/" + courseId + "/" + sectionId);
        },
        removeCourse: function (id) {
            var self = this;
            dataRepository.removeCourse(id)
                .then(function () {
                    self.courses.valueHasMutated();
            });
        },
        removeSection: function (sectionId, courseId) {
            var self = this;
            dataRepository.removeSection(sectionId, courseId)
                .then(function () {
                    self.courses([]);
                    self.courses(dataContext.courses);
                });
        },
    };
})