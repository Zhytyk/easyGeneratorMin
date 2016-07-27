define(['data/courseRepository', 'data/sectionRepository', 'extenders/validationExtenders', 'plugins/router'], function (courseRepository, sectionRepository, validationExtenders, router) {
    function initializeFormPage(id, self) {
        courseRepository.getCourseById(id)
            .then(function (course) {
                self.currentCourse = course;
                self.courseTitle(self.currentCourse.title);
                self.courseDescription(self.currentCourse.description);
            });
    };
    return {
        currentCourse: '',
        courseTitle: ko.observable().extend({ rangeRequired: "" }),
        courseDescription: ko.observable().extend({ required: "" }),
        sectionTitle: ko.observable().extend({ required: "" }),
        activate: function (id) {
            initializeFormPage(id, this);
        },
        updateCourse: function () {
            courseRepository.updateCourse(this.currentCourse.id, this.courseTitle, this.courseDescription).then(function (error) {
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