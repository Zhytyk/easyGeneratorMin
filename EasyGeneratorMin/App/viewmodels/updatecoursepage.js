define(['data/dataRepository', 'extenders/validationExtenders', 'plugins/router'], function (dataRepository, validationExtenders, router) {
    function initializeFormPage(id, self) {
        self.currentCourse = dataRepository.getCourseById(id);
        self.title(self.currentCourse.title);
        self.description(self.currentCourse.description);
    };
    return {
        currentCourse: '',
        title: ko.observable().extend({ rangeRequired: "" }),
        description: ko.observable().extend({ required: "" }),
        activate: function (id) {
            initializeFormPage(id, this);
        },
        updateCourse: function () {
            var course = { Id: this.currentCourse.id, Title: this.title, Description: this.description, CreatedDate: this.currentCourse.createdDate };
            dataRepository.updateCourse(course).then(function () {
                router.navigate("#");
            });
        },
    }

})