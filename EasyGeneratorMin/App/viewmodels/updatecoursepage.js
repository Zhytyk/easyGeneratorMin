define(['data/courseRepository', 'data/sectionRepository', 'extenders/validationExtenders', 'plugins/router'], function (courseRepository, sectionRepository, validationExtenders, router) {
    function initializeFormPage(id, self) {
        courseRepository.getCourseById(id)
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
        sectionTitle: ko.observable(),
        activate: function (id) {
            initializeFormPage(id, this);
        },
        updateCourse: function () {
            courseRepository.updateCourse(this.currentCourse.id, this.title, this.description).then(function (error) {
                if (error) alert(error);
                else router.navigate("#");
            });
        },
        createSection: function () {
            sectionRepository.createSection(this.currentCourse.id, this.sectionTitle).then(function (error) {
                if (error) alert(error);
                else router.navigate("#");
            });
        },
    };

})