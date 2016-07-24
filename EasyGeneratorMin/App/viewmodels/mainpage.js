define(['durandal/app', 'plugins/router', 'data/dataContext', 'data/dataRepository'], function (app, router, dataContext, dataRepository) {
    return {
        courses: ko.observableArray([]),
        sections: ko.observableArray([]),
        activate: function () {
            this.courses(dataContext.courses);
            this.sections(dataContext.sections);
        },
        createCourse: function () {
            router.navigate("#create");
        },
        updateCourse: function (id) {
            router.navigate("#update/" + id);
        },
        removeCourse: function (id) {
            var self = this;
            dataRepository.removeCourse(id)
                .then(function () {
                    self.courses.valueHasMutated();
            });
        },
        removeSection: function (id) {
            var self = this;
            dataRepository.removeSection(id)
                .then(function () {
                    self.courses.valueHasMutated();
            })
        }
    };
})