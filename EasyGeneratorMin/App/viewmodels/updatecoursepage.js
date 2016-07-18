define(['data/dataRepository', 'extenders/validationExtenders', 'plugins/router'], function (dataRepository, validationExtenders, router) {
    function initializeFormPage(id, self) {
        dataRepository.getCourseById(id)
            .then(function (course) {
                self.currentCourse = course;
                self.title(self.currentCourse.title);
                self.description(self.currentCourse.description);
            });
    };
    return {
        currentCourse: '',
        title: ko.observable().extend({ rangeRequired: "" }),
        description: ko.observable().extend({ required: "" }),
        activate: function (id) {
            initializeFormPage(id, this);
        },
        updateCourse: function () {
            dataRepository.updateCourse(this.currentCourse.id, this.title, this.description).then(function () {
                router.navigate("#");
            });
        },
    }

})